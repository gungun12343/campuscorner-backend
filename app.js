const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Paper = require("./models/papers.js");
const Note = require("./models/notes.js");
const Syllabus = require("./models/syllabus.js");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
require("dotenv").config();

const MONGO_URL = "mongodb://127.0.0.1:27017/campuscorner";
const db_URL = process.env.ATLASDB_URL;

main()
    .then(() => {
    console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect(db_URL);
}

mongoose.connection.on('error', err => {
  console.error("Mongoose connection error:", err);
});

app.use(cors({ origin: 'https://campuscorner-frontend.vercel.app', credentials: true}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const sessionOptions = {
    secret: "cec9wedu92u2",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
};

app.use(session(sessionOptions));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

function isAuthenticated(req, res, next) {
    if(!req.isAuthenticated()) {
        return res.status(401).json({message: "Not logged In"});
    }
    next();
}

app.get("/", (req, res) => {
    res.send("hello from server");
})

app.get("/syllabus/:sem", async(req, res) => {
    let {sem} = req.params;
    let syllabus = await Syllabus.find({sem: sem});
    res.json(syllabus);
})

app.get("/papers/:subject", async (req, res) => {
    let {subject} = req.params;
    let papers = await Paper.find({name: subject});
    res.json(papers);
})

app.get("/notes/:subject", async (req, res) => {
    let {subject} = req.params;
    let notes = await Note.find({name: subject});
    let result = notes[0].url;
    res.json(result);
})

app.get("/:sem/subjects", async (req, res) => {
    let { sem } = req.params;
    let notes = await Note.find({sem: sem});  
    res.json(notes);
})

app.post("/signup", async(req, res, next) => {
    try {
        let {username, email, password} = req.body;
        const newUser = new User({email, username});
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if(err) {
                return next(err);
            }
             res.send("working");
        })
    } catch(err){
        console.log(err);
        next(err);
    }
})

app.post("/login", passport.authenticate("local"),async(req, res) => {
    res.send("logged in");
})

app.get("/logout", (req, res) => {
    req.logOut((err) => {
        if(err) {
            return next(err);
        }
        res.status(200).json({message: "user logged out"});
    })
})

app.get("/auth", isAuthenticated, (req, res) => {
    res.json({message: "you are logged in", user: req.user})
})

app.use((err,req, res, next) => {
    let {status=500, message="some error occured"} = err;
    res.status(status).send(message);
})

app.listen(8080, () => {
    console.log('listening to port 8080');
})