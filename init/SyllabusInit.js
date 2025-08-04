const mongoose = require("mongoose");
const Syllabus = require("../models/syllabus.js");
require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });

main()
    .then(() => {
    console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.ATLASDB_URL);
}

let syllabus = [
    {
        year: 1,
        sem: 1,
        branch: "cse",
        url: "https://www.rgpv.ac.in/UC/frm_download_file.aspx?Filepath=CDN/PubContent/Scheme/WEF%20July%202022300824115533.pdf"
    },
    {
        year: 1,
        sem: 2,
        branch: "cse",
        url: "https://www.rgpv.ac.in/UC/frm_download_file.aspx?Filepath=CDN/PubContent/Scheme/WEF%20July%202022300824115533.pdf"
    },
    {
        year: 2,
        sem: 3,
        branch: "cse",
        url: "https://www.rgpv.ac.in/UC/frm_download_file.aspx?Filepath=CDN/PubContent/Scheme/CS%20III%20Sy100719012330.pdf"
    },
    {
        year: 2,
        sem: 4,
        branch: "cse",
        url: "https://www.rgpv.ac.in/UC/frm_download_file.aspx?Filepath=CDN/PubContent/Scheme/cse020119025106.pdf"
    },
    {
        year: 3,
        sem: 5,
        branch: "cse",
        url: "https://www.rgpv.ac.in/UC/frm_download_file.aspx?Filepath=CDN/PubContent/Scheme/V%20Sem%20CSE_Sy060719033838.pdf"
    },
    {
        year: 3,
        sem: 6,
        branch: "cse",
        url: "https://www.rgpv.ac.in/UC/frm_download_file.aspx?Filepath=CDN/PubContent/Scheme/CSE-6_Sem_Syallbus311219032311.pdf"
    },
    {
        year: 4,
        sem: 7,
        branch: "cse",
        url: "https://www.rgpv.ac.in/UC/frm_download_file.aspx?Filepath=CDN/PubContent/Scheme/Computer_Science_100720025532.pdf"
    },
    {
        year: 4,
        sem: 8,
        branch: "cse",
        url: "https://www.rgpv.ac.in/UC/frm_download_file.aspx?Filepath=CDN/PubContent/Scheme/CSE_VIII_Sem_RGPV-Syllabus060221121616.pdf"
    },
]

Syllabus.insertMany(syllabus);