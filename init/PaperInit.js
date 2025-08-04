const mongoose = require("mongoose");
const Paper = require("../models/papers.js");
require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });

main()
    .then(() => {
    console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.ATLASDB_URL);
}

// let papers = [
//     {
//         name: "software architectures",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-701-software-architectures-dec-2024.pdf"
//     }, {
//         name: "big data",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-702-d-big-data-dec-2024.pdf"
//     }, {
//         name: "wireless and mobile computing",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-702-c-wireless-and-mobile-computing-dec-2024.pdf"
//     }, {
//         name: "data mining and warehousing",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-703-b-data-mining-and-warehousing-dec-2024.pdf"
//     }, {
//         name: "software architectures",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-701-software-architectures-nov-2023.pdf"
//     },  {
//         name: "deep and reinforcement learning",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-702-b-deep-and-reinforcement-learning-nov-2023.pdf"
//     },  {
//         name: "big data",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-702-d-big-data-nov-2023.pdf"
//     }, {
//         name: "cryptography and information security",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-703-a-cryptography-and-information-security-nov-2023.pdf"
//     },  {
//         name: "data mining and warehousing",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-703-b-data-mining-and-warehousing-nov-2023.pdf"
//     }, {
//         name: "software architectures",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/cs-701-software-architectures-nov-2022.pdf"
//     }, {
//         name: "big data",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/cs-702-d-big-data-nov-2022.pdf"
//     }, {
//         name: "cryptography and information security",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/cs-703-a-cryptography-and-information-security-nov-2022.pdf"
//     },
// ]

// let papers = [
//     {
//         name: "software architectures",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-701-software-architecture-dec-2020.pdf"
//     }, {
//         name: "computational intelligence",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-702-a-computational-intelligence-dec-2020.pdf"
//     }, {
//         name: "deep and reinforcement learning",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-702-b-deep-and-reinforcement-learning-dec-2020.pdf"
//     }, {
//         name: "wireless and mobile computing",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-702-c-wireless-and-mobile-computing-dec-2020.pdf"
//     }, {
//         name: "big data",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-702-d-big-data-dec-2020.pdf"
//     }, {
//         name: "distributed systems",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-702-distributed-systems-dec-2020.pdf"
//     }, {
//         name: "distributed systems",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-702-distributed-systems-jun-2020.pdf"
//     }, {
//         name: "cryptography and information security",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-703-a-cryptography-and-information-security-dec-2020.pdf"
//     }, {
//         name: "data mining and warehousing",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-703-b-data-mining-and-wareshousing-dec-2020.pdf"
//     }, {
//         name: "agile software development",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-703-c-agile-software-development-dec-2020.pdf"
//     }, {
//         name: "disaster management",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-703-d-disaster-management-dec-2020.pdf"
//     }, {
//         name: "information storage and management",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-704-information-storage-and-management-dec-2020.pdf"
//     }, {
//         name: "information storage and management",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-704-information-storage-and-management-jun-2020.pdf"
//     }, {
//         name: "distributed systems",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2017",
//         url: "https://www.rgpvonline.com/be/cs-702-distributed-systems-dec-2017.pdf"
//     }, {
//         name: "information storage and management",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2016",
//         url: "https://www.rgpvonline.com/be/cs-704-information-storage-and-management-dec-2016.pdf"
//     }, {
//         name: "distributed systems",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2015",
//         url: "https://www.rgpvonline.com/be/cs-702-distributed-system-dec-2015.pdf"
//     }, {
//         name: "distributed systems",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2016",
//         url: "https://www.rgpvonline.com/be/cs-702-distributed-system-dec-2016.pdf"
//     }, {
//         name: "information storage and management",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2015",
//         url: "https://www.rgpvonline.com/be/cs-704-information-storage-and-management-dec-2015.pdf"
//     }, {
//         name: "distributed systems",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2014",
//         url: "https://www.rgpvonline.com/be/cs-702-distributed-system-dec-2014.pdf"
//     }, {
//         name: "distributed systems",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2013",
//         url: "https://www.rgpvonline.com/be/cs-702-distributed-system-dec-2013.pdf"
//     }, {
//         name: "distributed systems",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2012",
//         url: "https://www.rgpvonline.com/be/cs-702-distributed-system-dec-2012.pdf"
//     }, {
//         name: "distributed systems",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2011",
//         url: "https://www.rgpvonline.com/be/cs-702-distributed-system-dec-2011.pdf"
//     }, {
//         name: "information storage and management",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2014",
//         url: "https://www.rgpvonline.com/be/cs-704-information-storage-and-management-dec-2014.pdf"
//     }, {
//         name: "information storage and management",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2013",
//         url: "https://www.rgpvonline.com/be/cs-704-information-storage-and-management-dec-2013.pdf"
//     }, {
//         name: "information storage and management",
//         collegeYear: 4,
//         sem: 7,
//         branch: "cse",
//         year: "2012",
//         url: "https://www.rgpvonline.com/be/cs-704-information-storage-and-management-dec-2012.pdf"
//     },
// ]

// let papers = [
//     {
//         name: "engineering chemistry",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/bt-101-engineering-chemistry-dec-2024.pdf"
//     },
//     {
//         name: "mathematics1",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/bt-102-mathematics-1-dec-2024.pdf"
//     },
//     {
//         name: "english for communication",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/bt-103-english-for-communication-dec-2024.pdf"
//     },
//     {
//         name: "basic electrical and electronics engineering",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/bt-104-basic-electrical-and-electronics-engineering-dec-2024.pdf"
//     },
//     {
//         name: "engineering graphics",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/bt-105-engineering-graphics-dec-2024.pdf"
//     },
//     {
//         name: "engineering chemistry",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/bt-101-engineering-chemistry-dec-2023.pdf"
//     },
//     {
//         name: "mathematics1",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/bt-102-mathematics-1-dec-2023.pdf"
//     },
//     {
//         name: "english for communication",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/bt-103-english-for-communication-dec-2023.pdf"
//     },
//     {
//         name: "basic electrical and electronics engineering",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/bt-104-basic-electrical-and-electronics-engineering-dec-2023.pdf"
//     },
//     {
//         name: "engineering graphics",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/bt-105-engineering-graphics-dec-2023.pdf"
//     },
//     {
//         name: "engineering chemistry",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/bt-101-engineering-chemistry-jun-2023.pdf"
//     },
//     {
//         name: "mathematics1",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/bt-102-mathematics-1-jun-2023.pdf",
//     },
//     {
//         name: "english for communication",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/bt-103-english-for-communication-jun-2023.pdf",
//     },
//     {
//         name: "basic electrical and electronics engineering",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/bt-104-basic-electrical-and-electronics-engineering-jun-2023.pdf",
//     },
//     {
//         name: "engineering graphics",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/bt-105-engineering-graphics-jun-2023.pdf",
//     },
//     {
//         name: "engineering chemistry",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/bt-101-engineering-chemistry-nov-2022.pdf",
//     },
//     {
//         name: "mathematics1",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/bt-102-mathematics-1-nov-2022.pdf",
//     },
//     {
//         name: "english for communication",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/bt-103-english-for-communication-nov-2022.pdf",
//     },
//     {
//         name: "basic electrical and electronics engineering",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/bt-104-basic-electrical-and-electronics-engineering-nov-2022.pdf",
//     },
//     {
//         name: "engineering graphics",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/bt-105-engineering-graphics-nov-2022.pdf",
//     },
//     {
//         name: "engineering chemistry",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/bt-101-engineering-chemistry-jun-2022.pdf",
//     },
//     {
//         name: "mathematics1",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/bt-102-mathematics-jun-2022.pdf",
//     },
//     {
//         name: "english for communication",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/bt-103-english-for-communication-jun-2022.pdf",
//     },
//     {
//         name: "basic electrical and electronics engineering",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/bt-104-basic-electrical-and-electronics-engineering-jun-2022.pdf",
//     },
//     {
//         name: "engineering graphics",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/bt-105-engineering-graphics-jun-2022.pdf",
//     },
//     {
//         name: "engineering chemistry",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/bt-101-engineering-chemistry-dec-2020.pdf",
//     },
//     {
//         name: "mathematics1",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/bt-102-mathematics-1-dec-2020.pdf",
//     },
//     {
//         name: "english for communication",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/bt-103-english-for-communication-dec-2020.pdf",
//     },
//     {
//         name: "basic electrical and electronics engineering",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/bt-104-basic-electrical-and-electronics-engineering-jun-2020.pdf",
//     },
//     {
//         name: "engineering graphics",
//         collegeYear: 1,
//         sem: 1,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/bt-105-engineering-graphics-jun-2020.pdf",
//     },
//     {
//         name: "engineering physics",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/bt-201-engineering-physics-dec-2024.pdf"
//     },
//     {
//         name: "mathematics2",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/bt-202-mathematics-2-dec-2024.pdf"
//     },
//     {
//         name: "basic mechanical engineering",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/bt-203-basic-mechanical-engineering-dec-2024.pdf"
//     },
//     {
//         name: "basic civil engineering & mechanics",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/bt-204-basic-civil-engineering-and-engineering-mechanics-dec-2024.pdf"
//     },
//     {
//         name: "basic computer engineering",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/bt-205-basic-computer-engineering-dec-2024.pdf"
//     },
//     {
//         name: "engineering physics",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/bt-201-engineering-physics-dec-2023.pdf"
//     },
//     {
//         name: "mathematics2",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/bt-202-mathematics-2-dec-2023.pdf"
//     },
//     {
//         name: "basic mechanical engineering",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/bt-203-basic-mechanical-engineering-dec-2023.pdf"
//     },
//     {
//         name: "basic civil engineering & mechanics",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/bt-204-basic-civil-engineering-and-engineering-mechanics-dec-2023.pdf"
//     },
//     {
//         name: "basic computer engineering",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/bt-205-basic-computer-engineering-dec-2023.pdf"
//     },
//     {
//         name: "engineering physics",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/bt-201-engineering-physics-jun-2023.pdf"
//     },
//     {
//         name: "mathematics2",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/bt-202-mathematics-2-jun-2023.pdf"
//     },
//     {
//         name: "basic mechanical engineering",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/bt-203-basic-mechanical-engineering-jun-2023.pdf"
//     },
//     {
//         name: "basic civil engineering & mechanics",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/bt-204-basic-civil-engineering-and-engineering-mechanics-jun-2023.pdf"
//     },
//     {
//         name: "basic computer engineering",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/bt-205-basic-computer-engineering-jun-2023.pdf"
//     },
//     {
//         name: "engineering physics",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/bt-201-engineering-physics-nov-2022.pdf"
//     },
//     {
//         name: "mathematics2",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/bt-202-mathematics-2-nov-2022.pdf"
//     },
//     {
//         name: "basic mechanical engineering",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/bt-203-basic-mechanical-engineering-nov-2022.pdf"
//     },
//     {
//         name: "basic civil engineering & mechanics",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/bt-204-basic-civil-engineering-and-engineering-mechanics-nov-2022.pdf"
//     },
//     {
//         name: "basic computer engineering",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/bt-205-basic-computer-engineering-nov-2022.pdf"
//     },
//     {
//         name: "engineering physics",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/bt-201-engineering-physics-jun-2022.pdf"
//     },
//     {
//         name: "mathematics2",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/bt-202-mathematics-2-jun-2022.pdf"
//     },
//     {
//         name: "basic mechanical engineering",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/bt-203-basic-mechanical-engineering-jun-2022.pdf"
//     },
//     {
//         name: "basic civil engineering & mechanics",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/bt-204-basic-civil-engineering-and-engineering-mechanics-jun-2022.pdf"
//     },
//     {
//         name: "basic computer engineering",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/bt-205-basic-computer-engineering-jun-2022.pdf"
//     },
//     {
//         name: "engineering physics",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/be-201-engineering-physics-jun-2020.pdf"
//     },
//     {
//         name: "mathematics2",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/bt-202-mathematics-2-jun-2020.pdf"
//     },
//     {
//         name: "basic mechanical engineering",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/bt-203-basic-mechanical-engineering-jun-2020.pdf"
//     },
//     {
//         name: "basic civil engineering & mechanics",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/bt-204-basic-civil-engineering-and-engineering-mechanics-jun-2020.pdf"
//     },
//     {
//         name: "basic computer engineering",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/bt-205-basic-computer-engineering-jun-2020.pdf"
//     },
//     {
//         name: "engineering physics",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2019",
//         url: "https://www.rgpvonline.com/be/bt-201-engineering-physics-may-2019.pdf"
//     },
//     {
//         name: "mathematics2",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2019",
//         url: "https://www.rgpvonline.com/be/bt-202-mathematics-2-may-2019.pdf"
//     },
//     {
//         name: "basic mechanical engineering",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2019",
//         url: "https://www.rgpvonline.com/be/bt-203-basic-mechanical-engineering-may-2019.pdf"
//     },
//     {
//         name: "basic civil engineering & mechanics",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2019",
//         url: "https://www.rgpvonline.com/be/bt-204-basic-civil-engineering-and-engineering-mechanics-may-2019.pdf"
//     },
//     {
//         name: "basic computer engineering",
//         collegeYear: 1,
//         sem: 2,
//         branch: "cse",
//         year: "2019",
//         url: "https://www.rgpvonline.com/be/bt-205-basic-computer-engineering-may-2019.pdf"
//     },
//     {
//         name: "digital systems",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-ct-co-ci-cy-304-digital-systems-dec-2024.pdf"
//     },
//     {
//         name: "data structure",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-ct-co-303-data-structures-dec-2024.pdf"
//     },
//     {
//         name: "discrete structure",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-ct-co-it-ci-csit-302-discrete-structure-dec-2024.pdf"
//     },
//     {
//         name: "object oriented programming",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-305-object-oriented-programming-and-methodology-dec-2024.pdf"
//     },
//     {
//         name: "data structure",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-ct-co-303-data-structures-jun-2024.pdf"
//     },
//     {
//         name: "discrete structure",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-it-302-discrete-structure-jun-2024.pdf"
//     },
//     {
//         name: "discrete structure",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/csit-302-discrete-structure-dec-2024.pdf"
//     },
//     {
//         name: "energy & environmental engineering",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/es-301-energy-and-environmental-engineering-dec-2024.pdf"
//     },
//     {
//         name: "object oriented programming",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-305-object-oriented-programming-and-methodology-dec-2023.pdf"
//     },
//     {
//         name: "data structure",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-ct-co-303-data-structures-dec-2023.pdf"
//     },
//     {
//         name: "data structure",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-ct-co-303-data-structures-jun-2023.pdf"
//     },
//     {
//         name: "object oriented programming",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-ct-co-305-object-oriented-programming-and-methodology-jun-2023.pdf"
//     },
//     {
//         name: "digital systems",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-ct-co-ci-304-digital-circuits-and-system-jun-2023.pdf"
//     },
//     {
//         name: "digital systems",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-ct-co-ci-cy-304-digital-systems-dec-2023.pdf"
//     },
//     {
//         name: "discrete structure",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-ct-co-it-302-discrete-structure-jun-2023.pdf"
//     },
//     {
//         name: "discrete structure",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-ct-co-it-ci-302-discrete-structure-dec-2023.pdf"
//     },
//     {
//         name: "discrete structure",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/csit-ci-302-discrete-structure-jun-2023.pdf"
//     },
//     {
//         name: "energy & environmental engineering",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/es-301-energy-and-environmental-engineering-dec-2023.pdf"
//     },
//     {
//         name: "energy & environmental engineering",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/es-301-energy-and-environmental-engineering-jun-2023.pdf"
//     },
//     {
//         name: "discrete structure",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/ci-cs-ct-co-it-302-discrete-structure-nov-2022.pdf"
//     },
//     {
//         name: "data structure",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/cs-ct-co-303-data-structures-nov-2022.pdf"
//     },
//     {
//         name: "object oriented programming",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/cs-ct-co-305-object-oriented-programming-and-methodology-nov-2022.pdf"
//     },
//     {
//         name: "digital systems",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/cs-ct-co-ci-304-digital-circuits-and-system-nov-2022.pdf"
//     },
//     {
//         name: "digital systems",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/cs-ct-co-ci-304-digital-systems-digital-circuits-and-system-nov-2022.pdf"
//     },
//     {
//         name: "digital systems",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/cs-ct-co-ci-304-digital-systems-nov-2022.pdf"
//     },
//     {
//         name: "data structure",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-ct-co-303-data-structures-dec-2020.pdf"
//     },
//     {
//         name: "data structure",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-ct-co-303-data-structures-jun-2020.pdf"
//     },
//     {
//         name: "digital systems",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-ct-co-304-digital-systems-dec-2020.pdf"
//     },
//     {
//         name: "object oriented programming",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-ct-co-305-object-oriented-programming-and-methodology-dec-2020.pdf"
//     },
//     {
//         name: "object oriented programming",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-ct-co-305-object-oriented-programming-and-methodology-jun-2020.pdf"
//     },
//     {
//         name: "digital systems",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-ct-co-ci-304-digital-circuits-and-system-jun-2020.pdf"
//     },
//     {
//         name: "digital systems",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-ct-co-ci-304-digital-systems-jun-2020.pdf"
//     },
//     {
//         name: "discrete structure",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-ct-co-ci-it-302-discrete-structures-dec-2020.pdf"
//     },
//     {
//         name: "discrete structure",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-ct-co-ci-it-302-discrete-structures-jun-2020.pdf"
//     },
//     {
//         name: "discrete structure",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-it-302-discrete-structure-jun-2020.pdf"
//     },
//     {
//         name: "data structure",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2019",
//         url: "https://www.rgpvonline.com/be/cs-303-data-structures-may-2019.pdf"
//     },
//     {
//         name: "data structure",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2019",
//         url: "https://www.rgpvonline.com/be/cs-303-data-structures-nov-2019.pdf"
//     },
//     {
//         name: "digital systems",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2019",
//         url: "https://www.rgpvonline.com/be/cs-304-digital-systems-may-2019.pdf"
//     },
//     {
//         name: "digital systems",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2019",
//         url: "https://www.rgpvonline.com/be/cs-304-digital-systems-nov-2019.pdf"
//     },
//     {
//         name: "object oriented programming",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2019",
//         url: "https://www.rgpvonline.com/be/cs-305-object-oriented-programming-and-methodology-may-2019.pdf"
//     },
//     {
//         name: "object oriented programming",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2019",
//         url: "https://www.rgpvonline.com/be/cs-305-object-oriented-programming-and-methodology-nov-2019.pdf"
//     },
//     {
//         name: "discrete structure",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2019",
//         url: "https://www.rgpvonline.com/be/cs-it-302-discrete-structures-may-2019.pdf"
//     },
//     {
//         name: "discrete structure",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2019",
//         url: "https://www.rgpvonline.com/be/cs-it-302-discrete-structures-nov-2019.pdf"
//     },
//     {
//         name: "data structure",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2018",
//         url: "https://www.rgpvonline.com/be/cs-303-data-structures-nov-2018.pdf"
//     },
//     {
//         name: "digital systems",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2018",
//         url: "https://www.rgpvonline.com/be/cs-304-digital-systems-nov-2018.pdf"
//     },
//     {
//         name: "object oriented programming",
//         collegeYear: 2,
//         sem: 3,
//         branch: "cse",
//         year: "2018",
//         url: "https://www.rgpvonline.com/be/cs-305-object-oriented-programming-and-methodology-nov-2018.pdf"
//     },
//     {
//         name: "computer organization & architecture",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/al-ci-cs-ct-co-io-is-404-computer-organization-and-architecture-dec-2024.pdf"
//     },
//     {
//         name: "software engineering",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/al-cd-cs-ct-co-sd-403-software-engineering-jun-2024.pdf"
//     },
//     {
//         name: "computer organization & architecture",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/al-csit-cs-ct-co-io-is-404-computer-organization-and-architecture-jun-2024.pdf"
//     },
//     {
//         name: "mathematics3",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/bt-401-mathematics-3-dec-2024.pdf"
//     },
//     {
//         name: "mathematics3",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/bt-401-mathematics-3-jun-2024.pdf"
//     },
//     {
//         name: "analysis & design of algorithm",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-sd-402-analysis-design-of-algorithm-dec-2024.pdf"
//     },
//     {
//         name: "analysis & design of algorithm",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-sd-402-analysis-design-of-algorithm-jun-2024.pdf"
//     },
//     {
//         name: "mathematics3",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/ad-ag-an-at-ci-cs-ct-co-ee-ex-ft-it-mi-mm-bt401-mathematics-3-jun-2023.pdf"
//     },
//     {
//         name: "operating systems",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/ad-cd-cs-405-operating-systems-jun-2023.pdf"
//     },
//     {
//         name: "operating systems",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/ad-cd-cs-405-operating-systems-nov-2023.pdf"
//     },
//     {
//         name: "software engineering",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/al-cd-cs-ct-co-403-software-engineering-jun-2023.pdf"
//     },
//     {
//         name: "software engineering",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/al-cd-cs-ct-co-403-software-engineering-nov-2023.pdf"
//     },
//     {
//         name: "computer organization & architecture",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/al-ci-cs-ct-co-io-is-404-computer-organization-and-architecture-jun-2023.pdf"
//     },
//     {
//         name: "computer organization & architecture",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/al-ci-cs-ct-co-io-is-404-computer-organization-and-architecture-nov-2023.pdf"
//     },
//     {
//         name: "mathematics3",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/bt-401-mathematics-3-jun-2023.pdf"
//     },
//     {
//         name: "mathematics3",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/bt-401-mathematics-3-nov-2023.pdf"
//     },
//     {
//         name: "analysis & design of algorithm",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-402-analysis-design-of-algorithm-jun-2023.pdf"
//     },
//     {
//         name: "analysis & design of algorithm",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-402-analysis-design-of-algorithm-nov-2023.pdf"
//     },
//     {
//         name: "mathematics3",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/ad-ag-at-ci-cs-ct-co-ee-ex-ft-it-mi-mm-bt-401-mathematics-3-jun-2022.pdf"
//     },
//     {
//         name: "mathematics3",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/ad-ag-at-ci-cs-ct-co-ee-ex-ft-it-mi-mm-bt-401-mathematics-3-nov-2022.pdf"
//     },
//     {
//         name: "software engineering",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/al-cd-cs-ct-co-403-software-engineering-jun-2022.pdf"
//     },
//     {
//         name: "computer organization & architecture",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/ci-cs-ct-co-al-io-is-404-computer-organization-and-architecture-jun-2022.pdf"
//     },
//     {
//         name: "analysis & design of algorithm",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/cs-402-analysis-design-of-algorithm-jun-2022.pdf"
//     },
//     {
//         name: "mathematics3",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/at-cs-ct-co-ci-ee-ex-ei-ft-it-mi-4-sem-bt-401-mathematics-3-jun-2020.pdf"
//     },
//     {
//         name: "mathematics3",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/at-cs-ct-co-ci-ee-ex-ei-ft-it-mi-bt-401-mathematics-3-jun-2020.pdf"
//     },
//     {
//         name: "analysis & design of algorithm",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-402-analysis-design-of-algorithms-dec-2020.pdf"
//     },
//     {
//         name: "analysis & design of algorithm",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-402-analysis-design-of-algorithms-jun-2020.pdf"
//     },
//     {
//         name: "software engineering",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-403-software-engineering-dec-2020.pdf"
//     },
//     {
//         name: "software engineering",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-403-software-engineering-jun-2020.pdf"
//     },
//     {
//         name: "computer organization & architecture",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-404-computer-organisation-and-architecture-dec-2020.pdf"
//     },
//     {
//         name: "operating systems",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-405-operating-system-jun-2020.pdf"
//     },
//     {
//         name: "computer organization & architecture",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-ci-404-computer-organisation-and-architecture-jun-2020.pdf"
//     },
//     {
//         name: "mathematics3",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-ee-ex-it-mi-bt-401-mathematics-3-dec-2020.pdf"
//     },
//     {
//         name: "analysis & design of algorithm",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-it-404-analysis-and-design-of-algorithms-jun-2020.pdf"
//     },
//     {
//         name: "analysis & design of algorithm",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2019",
//         url: "https://www.rgpvonline.com/be/cs-402-analysis-design-of-algorithm-may-2019.pdf"
//     },
//     {
//         name: "analysis & design of algorithm",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2019",
//         url: "https://www.rgpvonline.com/be/cs-402-analysis-design-of-algorithm-nov-2019.pdf"
//     },
//     {
//         name: "software engineering",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2019",
//         url: "https://www.rgpvonline.com/be/cs-403-software-engineering-may-2019.pdf"
//     },
//     {
//         name: "computer organization & architecture",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2019",
//         url: "https://www.rgpvonline.com/be/cs-404-computer-organisation-and-architecture-may-2019.pdf"
//     },
//     {
//         name: "operating systems",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2019",
//         url: "https://www.rgpvonline.com/be/cs-405-operating-system-nov-2019.pdf"
//     },
//     {
//         name: "operating systems",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2019",
//         url: "https://www.rgpvonline.com/be/cs-405-operating-systems-may-2019.pdf"
//     },
//     {
//         name: "computer organization & architecture",
//         collegeYear: 2,
//         sem: 4,
//         branch: "cse",
//         year: "2019",
//         url: "https://www.rgpvonline.com/be/cs-it-402-computer-system-organization-nov-2019.pdf"
//     },
//     {
//         name: "database management systems",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-502-database-management-systems-dec-2024.pdf"
//     },
//     {
//         name: "cyber security",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-503-c-cyber-security-dec-2024.pdf"
//     },
//     {
//         name: "internet & web technology",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-504-a-internet-and-web-technology-dec-2024.pdf"
//     },
//     {
//         name: "theory of computation",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-sd-501-theory-of-computation-dec-2024.pdf"
//     },
//     {
//         name: "theory of computation",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-501-theory-of-computation-may-2023.pdf"
//     },
//     {
//         name: "theory of computation",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-501-theory-of-computation-nov-2023.pdf"
//     },
//     {
//         name: "database management systems",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-502-database-management-systems-nov-2023.pdf"
//     },
//     {
//         name: "data analytics",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-503-a-data-analytics-nov-2023.pdf"
//     },
//     {
//         name: "pattern recognition",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-503-b-pattern-recognition-nov-2023.pdf"
//     },
//     {
//         name: "cyber security",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-503-c-cyber-security-nov-2023.pdf"
//     },
//     {
//         name: "internet & web technology",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-504-a-internet-and-web-technology-nov-2023.pdf"
//     },
//     {
//         name: "theory of computation",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/cs-501-theory-of-computation-nov-2022.pdf"
//     },
//     {
//         name: "database management systems",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/cs-502-data-management-systems-nov-2022.pdf"
//     },
//     {
//         name: "cyber security",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/cs-503-c-cyber-security-nov-2022.pdf"
//     },
//     {
//         name: "internet & web technology",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/cs-504-a-internet-and-web-technology-nov-2022.pdf"
//     },
//     {
//         name: "theory of computation",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-501-theory-of-computation-dec-2020.pdf"
//     },
//     {
//         name: "theory of computation",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-501-theory-of-computation-jun-2020.pdf"
//     },
//     {
//         name: "database management systems",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-502-database-management-systems-dec-2020.pdf"
//     },
//     {
//         name: "database management systems",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-502-database-management-systems-jun-2020.pdf"
//     },
//     {
//         name: "operating systems",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-502-operating-system-jun-2020.pdf"
//     },
//     {
//         name: "data analytics",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-503-a-data-analytics-dec-2020.pdf"
//     },
//     {
//         name: "data analytics",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-503-a-data-analytics-jun-2020.pdf"
//     },
//     {
//         name: "pattern recognition",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-503-b-pattern-recognition-dec-2020.pdf"
//     },
//     {
//         name: "pattern recognition",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-503-b-pattern-recognition-jun-2020.pdf"
//     },
//     {
//         name: "cyber security",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-503-c-cyber-security-dec-2020.pdf"
//     },
//     {
//         name: "cyber security",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-503-c-cyber-security-jun-2020.pdf"
//     },
//     {
//         name: "database management systems",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-503-database-management-system-jun-2020.pdf"
//     },
//     {
//         name: "internet & web technology",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-504-a-internet-and-web-technology-dec-2020.pdf"
//     },
//     {
//         name: "internet & web technology",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-504-a-internet-and-web-technology-jun-2020.pdf"
//     },
//     {
//         name: "object oriented programming",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-504-b-object-oriented-programming-dec-2020.pdf"
//     },
//     {
//         name: "object oriented programming",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-504-b-object-oriented-programming-jun-2020.pdf"
//     },
//     {
//         name: "introduction to database management systems",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-504-c-introduction-to-database-management-systems-dec-2020.pdf"
//     },
//     {
//         name: "introduction to database management systems",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-504-c-introduction-to-database-management-systems-jun-2020.pdf"
//     },
//     {
//         name: "theory of computation",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-505-theory-of-computation-jun-2020.pdf"
//     },
//     {
//         name: "theory of computation",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2019",
//         url: "https://www.rgpvonline.com/be/cs-501-theory-of-computation-nov-2019.pdf"
//     },
//     {
//         name: "database management systems",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2019",
//         url: "https://www.rgpvonline.com/be/cs-502-database-management-system-nov-2019.pdf"
//     },
//     {
//         name: "cyber security",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2019",
//         url: "https://www.rgpvonline.com/be/cs-503-c-cyber-security-nov-2019.pdf"
//     },
//     {
//         name: "internet & web technology",
//         collegeYear: 3,
//         sem: 5,
//         branch: "cse",
//         year: "2019",
//         url: "https://www.rgpvonline.com/be/cs-504-a-internet-and-web-technology-nov-2019.pdf"
//     },
//     {
//         name: "computer networks",
//         collegeYear: 3,
//         sem: 6,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cd-cs-602-computer-networks-dec-2024.pdf"
//     },
//     {
//         name: "computer networks",
//         collegeYear: 3,
//         sem: 6,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cd-cs-602-computer-networks-may-2024.pdf"
//     },
//     {
//         name: "machine learning",
//         collegeYear: 3,
//         sem: 6,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-601-machine-learning-dec-2024.pdf"
//     },
//     {
//         name: "machine learning",
//         collegeYear: 3,
//         sem: 6,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-601-machine-learning-may-2024.pdf"
//     },
//     {
//         name: "compiler design",
//         collegeYear: 3,
//         sem: 6,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-603-c-compiler-design-dec-2024.pdf"
//     },
//     {
//         name: "compiler design",
//         collegeYear: 3,
//         sem: 6,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-603-c-compiler-design-may-2024.pdf"
//     },
//     {
//         name: "project management",
//         collegeYear: 3,
//         sem: 6,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-604-b-project-management-dec-2024.pdf"
//     },
//     {
//         name: "project management",
//         collegeYear: 3,
//         sem: 6,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-604-b-project-management-may-2024.pdf"
//     },
//     {
//         name: "computer networks",
//         collegeYear: 3,
//         sem: 6,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cd-cs-602-computer-networks-may-2023.pdf"
//     },
//     {
//         name: "machine learning",
//         collegeYear: 3,
//         sem: 6,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-601-machine-learning-may-2023.pdf"
//     },
//     {
//         name: "compiler design",
//         collegeYear: 3,
//         sem: 6,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-603-c-compiler-design-may-2023.pdf"
//     },
//     {
//         name: "knowledge management",
//         collegeYear: 3,
//         sem: 6,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-604-a-knowledge-management-may-2023.pdf"
//     },
//     {
//         name: "project management",
//         collegeYear: 3,
//         sem: 6,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-604-b-project-management-may-2023.pdf"
//     },
//     {
//         name: "machine learning",
//         collegeYear: 3,
//         sem: 6,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/cs-601-machine-learning-may-2022.pdf"
//     },
//     {
//         name: "computer networks",
//         collegeYear: 3,
//         sem: 6,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/cs-602-computer-networks-may-2022.pdf"
//     },
//     {
//         name: "computer graphics & visualization",
//         collegeYear: 3,
//         sem: 6,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/cs-603-b-computer-graphics-and-visualization-may-2022.pdf"
//     },
//     {
//         name: "compiler design",
//         collegeYear: 3,
//         sem: 6,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/cs-603-c-compiler-design-may-2022.pdf"
//     },
//     {
//         name: "project management",
//         collegeYear: 3,
//         sem: 6,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/cs-604-b-project-management-may-2022.pdf"
//     },
//     {
//         name: "rural technology & community development",
//         collegeYear: 3,
//         sem: 6,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/cs-604-c-rural-technology-and-community-development-may-2022.pdf"
//     },
//     {
//         name: "machine learning",
//         collegeYear: 3,
//         sem: 6,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-601-machine-learning-dec-2020.pdf"
//     },
//     {
//         name: "computer networks",
//         collegeYear: 3,
//         sem: 6,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-602-computer-networks-dec-2020.pdf"
//     },
//     {
//         name: "compiler design",
//         collegeYear: 3,
//         sem: 6,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-603-c-compiler-design-dec-2020.pdf"
//     },
//     {
//         name: "project management",
//         collegeYear: 3,
//         sem: 6,
//         branch: "cse",
//         year: "2020",
//         url: "https://www.rgpvonline.com/be/cs-604-b-project-management-dec-2020.pdf"
//     },
//     {
//         name: "internet of things",
//         collegeYear: 4,
//         sem: 8,
//         branch: "cse",
//         year: "2025",
//         url: "https://www.rgpvonline.com/be/cs-801-internet-of-things-jun-2025.pdf"
//     },
//     {
//         name: "cloud computing",
//         collegeYear: 4,
//         sem: 8,
//         branch: "cse",
//         year: "2025",
//         url: "https://www.rgpvonline.com/be/cs-802-b-cloud-computing-jun-2025.pdf"
//     },
//     {
//         name: "image processing and computer vision",
//         collegeYear: 4,
//         sem: 8,
//         branch: "cse",
//         year: "2025",
//         url: "https://www.rgpvonline.com/be/cs-803-a-image-processing-and-computer-vision-jun-2025.pdf"
//     },
//     {
//         name: "internet of things",
//         collegeYear: 4,
//         sem: 8,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-801-internet-of-things-dec-2024.pdf"
//     },
//     {
//         name: "internet of things",
//         collegeYear: 4,
//         sem: 8,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-801-internet-of-things-may-2024.pdf"
//     },
//     {
//         name: "block chain technologies",
//         collegeYear: 4,
//         sem: 8,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-802-a-block-chain-technologies-may-2024.pdf"
//     },
//     {
//         name: "cloud computing",
//         collegeYear: 4,
//         sem: 8,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-802-b-cloud-computing-dec-2024.pdf"
//     },
//     {
//         name: "cloud computing",
//         collegeYear: 4,
//         sem: 8,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-802-b-cloud-computing-may-2024.pdf"
//     },
//     {
//         name: "image processing and computer vision",
//         collegeYear: 4,
//         sem: 8,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-803-a-image-processing-and-computer-vision-dec-2024.pdf"
//     },
//     {
//         name: "image processing and computer vision",
//         collegeYear: 4,
//         sem: 8,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-803-a-image-processing-and-computer-vision-may-2024.pdf"
//     },
//     {
//         name: "managing innovation and enterpreneurship",
//         collegeYear: 4,
//         sem: 8,
//         branch: "cse",
//         year: "2024",
//         url: "https://www.rgpvonline.com/be/cs-803-d-managing-innovation-and-entrepreneurship-may-2024.pdf"
//     },
//     {
//         name: "internet of things",
//         collegeYear: 4,
//         sem: 8,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-801-internet-of-things-may-2023.pdf"
//     },
//     {
//         name: "cloud computing",
//         collegeYear: 4,
//         sem: 8,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-802-b-cloud-computing-may-2023.pdf"
//     },
//     {
//         name: "image processing and computer vision",
//         collegeYear: 4,
//         sem: 8,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-803-a-image-processing-and-computer-vision-may-2023.pdf"
//     },
//     {
//         name: "internet of things",
//         collegeYear: 4,
//         sem: 8,
//         branch: "cse",
//         year: "2023",
//         url: "https://www.rgpvonline.com/be/cs-803-c-internet-of-things-may-2023.pdf"
//     },
//     {
//         name: "internet of things",
//         collegeYear: 4,
//         sem: 8,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/cs-801-internet-of-things-may-2022.pdf"
//     },
//     {
//         name: "block chain technologies",
//         collegeYear: 4,
//         sem: 8,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/cs-802-a-block-chain-technologies-may-2022.pdf"
//     },
//     {
//         name: "cloud computing",
//         collegeYear: 4,
//         sem: 8,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/cs-802-b-cloud-computing-may-2022.pdf"
//     },
//     {
//         name: "high performance computing",
//         collegeYear: 4,
//         sem: 8,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/cs-802-c-high-performance-computing-may-2022.pdf"
//     },
//     {
//         name: "object oriented software engineering",
//         collegeYear: 4,
//         sem: 8,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/cs-802-d-object-oriented-software-engineering-may-2022.pdf"
//     },
//     {
//         name: "image processing and computer vision",
//         collegeYear: 4,
//         sem: 8,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/cs-803-a-image-processing-and-computer-vision-may-2022.pdf"
//     },
//     {
//         name: "managing innovation and enterpreneurship",
//         collegeYear: 4,
//         sem: 8,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/cs-803-d-managing-innovation-and-entrepreneurship-may-2022.pdf"
//     },
//     {
//         name: "managing innovation and enterpreneurship",
//         collegeYear: 4,
//         sem: 8,
//         branch: "cse",
//         year: "2022",
//         url: "https://www.rgpvonline.com/be/cs-803-d-managing-innovation-and-entrepreneurship-may-2022.pdf"
//     },
// ]



// Paper.insertMany(papers);

// Paper.updateMany({name: "basic electrical and electronics engineering"}, {name: "basic electrical & electronics engineering"})
// .then((res) => console.log(res))