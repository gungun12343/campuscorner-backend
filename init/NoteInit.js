const mongoose = require("mongoose");
const Note = require("../models/notes.js");
require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });

main()
    .then(() => {
    console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.ATLASDB_URL);
}

// let notes = [
//     {
//         name: "software architectures",
//         year: 4,
//         sem: 7,
//         branch: "cse",
//         code: "CS701",
//         url: ["https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%217739&authkey=AI1HN6QM87ruCw0&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%217737&authkey=AHgGCRKb5eztWTU&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%217738&authkey=AETBwy4PScPFlII&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%217741&authkey=ACiFRuQkUgWkKFw&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%217740&authkey=AAsySh0dDOw3ln4&em=2"
//         ]
//     },
//     {
//         name: "engineering chemistry",
//         year: 1,
//         sem: 1,
//         branch: "cse",
//         code: "BT101",
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21728&authkey=ANmmlULSxLLyRao&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21729&authkey=APWfcV6l_rhTYWs&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21730&authkey=ABXRxLpF2erhmDk&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21733&authkey=AAC-cwr-tc_r2Bk&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21731&authkey=ANmr33gCTrVXODk&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21727&authkey=ANilbCin0oCqiEM&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21732&authkey=AIyacBBYYadsw00&em=2"
//         ]
//     }, 
//     {
//         name: "mathematics1",
//         year: 1,
//         sem: 1,
//         branch: "cse",
//         code: "BT102",
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21741&authkey=APAKsnhVcbqdNCY&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21739&authkey=AAuQlFrBOy2kPF4&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21736&authkey=AHzzklyu2iWoY94&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21734&authkey=ANfnLdforq-jL_E&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21735&authkey=AIHcYXXPJVSMdoE&em=2"
//         ]
//     },
//     {
//         name: "english for communication",
//         year: 1,
//         sem: 1,
//         branch: "cse",
//         code: "BT103",
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21745&authkey=AA-JypEi0HrsoNM&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21743&authkey=AC78AoSR_4BRCZY&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21740&authkey=AOQpgV0EfvwcYE0&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21737&authkey=AJ1NnrvosPljRfA&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21738&authkey=AB_DvcdpBjMH1zo&em=2"
//         ]
//     },
//     {
//         name: "basic electrical & electronics engineering",
//         year: 1,
//         sem: 1,
//         branch: "cse",
//         code: "BT104",
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21746&authkey=AK7JRZSVOgaKSYA&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21748&authkey=ACM9mBdEm2Yn-c8&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21742&authkey=ANFJbTB36r_dyB8&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21744&authkey=AF1c3RMNvtcoUMk&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21751&authkey=AHP0zGtro1itqwc&em=2",
//         ]
//     },
//     {
//         name: "engineering graphics",
//         year: 1,
//         sem: 1,
//         branch: "cse",
//         code: "BT105",
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21758&authkey=AHJej6xFFiCGadc&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21750&authkey=AGmzq4C_qF8QtJI&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21752&authkey=AFT0_jGneqUfatk&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21747&authkey=ACw7JStECierQgo&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21753&authkey=ALyOyVZiYqqUOoA&em=2",
//         ]
//     },
//     {
//         name: "engineering physics",
//         year: 1,
//         sem: 2,
//         branch: "cse",
//         code: "BT201",
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21756&authkey=ADDgfJEVfEPFCCc&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21754&authkey=AAIbhs2SpdPaKng&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21755&authkey=AF1hNQ72YOovmbQ&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21757&authkey=AMR2yDyH_4wquJg&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21749&authkey=ALdXekAgo89Tq_A&em=2"
//         ]
//     },
//     {
//         name: "mathematics2",
//         year: 1,
//         sem: 2,
//         branch: "cse",
//         code: "BT202",
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21762&authkey=AB_iti0KQsA4hsE&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21764&authkey=AGuq-_Okl2rFsmk&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21761&authkey=AKjP2K6zUT9r4L4&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21759&authkey=ANjh2_2hlK5H6cU&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21760&authkey=AO41XFSJyfzac0A&em=2",
//         ]
//     },
//     {
//         name: "basic mechanical engineering",
//         year: 1,
//         sem: 2,
//         branch: "cse",
//         code: "BT203", 
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21766&authkey=AE_VVJt7Rn1C9k0&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21763&authkey=AM9QFuIf_RphKGg&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21776&authkey=AL4pxKJLejF8CPs&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21784&authkey=APcgUd8Z0G0o2MM&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21765&authkey=ACKfDAD5nTcvTVA&em=2",
//         ]  
//     },
//     {
//         name: "basic civil engineering & mechanics",
//         year: 1,
//         sem: 2,
//         branch: "cse",
//         code: "BT204",
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21769&authkey=AMfbCBG416TyDvU&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21770&authkey=AH0jQD3uztYxsxs&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21768&authkey=AInfzwCZrI2FWPc&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21771&authkey=AAWEhzSIfY_7dPs&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21767&authkey=AEbAYpkRvrUzXb0&em=2"
//         ]
//     },
//     {
//         name: "basic computer engineering",
//         year: 1,
//         sem: 2,
//         branch: "cse",
//         code: "BT205",
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21780&authkey=AJZZSCVFwBcN09Y&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21778&authkey=AEh8RTRxViLpYpU&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21773&authkey=AOg9y49nrYK_vBU&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21774&authkey=APfPNc00yKtawJw&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21772&authkey=ALPBFAxyjkXZ2W0&em=2",
//         ]
//     },
//     {
//         name: "energy & environmental engineering",
//         year: 2,
//         sem: 3,
//         branch: "cse",
//         code: "ES301",
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21861&authkey=AIe41nhKgFuz1MY&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21853&authkey=AEPRIAML6-rWmr0&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21849&authkey=AIlT7DgaJgxQrB0&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21852&authkey=AATXTdwRg-CGJ08&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21847&authkey=AHxSw0CZz3fqFL4&em=2"
//         ]
//     },
//     {
//         name: "discrete structure",
//         year: 2,
//         sem: 3,
//         branch: "cse",
//         code: "CS302",
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21856&authkey=AKkUw9qaYDnsZ4s&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21854&authkey=ALqqO5nw0GGRMjE&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21855&authkey=AJxpQ5w_DKBX_TY&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21850&authkey=AJZT3qigZHfz_RY&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21851&authkey=AJZ1nEvbAZJU5X4&em=2"
//         ]
//     },
//     {
//         name: "data structure",
//         year: 2,
//         sem: 3,
//         branch: "cse",
//         code: "CS303",
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21859&authkey=ACSx1qZiyjFnysE&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21858&authkey=AHWmbw7tptSuBME&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21864&authkey=AJNbXe8EQhqzXQM&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21860&authkey=AF8st8Xt3GANP2I&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21857&authkey=AKa2ny8Ki12OjNQ&em=2"
//         ]
//     },
//     {
//         name: "digital systems",
//         year: 2,
//         sem: 3,
//         branch: "cse",
//         code: "CS304",
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21865&authkey=AOKtN0UaADFOlEQ&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21868&authkey=AKUuNpHXIvzkZVs&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21867&authkey=AMkGo7Zg3FjTrCA&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21862&authkey=AJ6YhEmA3ysjVFw&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21863&authkey=AKtoCXScu8zX4FE&em=2"
//         ]
//     },
//     {
//         name: "object oriented programming",
//         year: 2,
//         sem: 3,
//         branch: "cse",
//         code: "CS305",
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21871&authkey=ANETwy0cLy9s2ks&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21870&authkey=AKFiSpwj0lve9pc&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21872&authkey=ABB_mZobkMaIZrE&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21869&authkey=AFS_FR1xliDhaHE&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21866&authkey=ADu91UM3Z_gfkSg&em=2"
//         ]
//     },
//     {
//         name: "mathematics3",
//         year: 2,
//         sem: 4,
//         branch: "cse",
//         code: "BT401",
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21952&authkey=AMB8pgk5K3DkrHw&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21947&authkey=AKV2bKXMa6VimCo&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21953&authkey=AFG0aRtpOyhmjl0&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21948&authkey=AIlrJMBIqB7iiu0&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21949&authkey=AIPe2S_lzlFsMe0&em=2"
//         ]
//     },
//     {
//         name: "analysis & design of algorithm",
//         year: 2,
//         sem: 4,
//         branch: "cse",
//         code: "CS402",
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21961&authkey=ADtXTixcOpIwq2w&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21958&authkey=AFLWvBnQdQj-9hs&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21959&authkey=AHYORpcyGRzTr14&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21960&authkey=AHvtnSHaxg1nbJ4&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21957&authkey=AGr2rBSVuBH5tx4&em=2"
//         ]
//     },
//     {
//         name: "software engineering",
//         year: 2,
//         sem: 4,
//         branch: "cse",
//         code: "CS403",
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21969&authkey=ADxqKLUGu-rhXhY&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21965&authkey=AIDxlGxegJYpfBs&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21964&authkey=AI63V77e18WYiJg&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21962&authkey=AJRvvoGfBCHKafs&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21963&authkey=ACZ7AZl1VcoGhSo&em=2"
//         ]
//     },
//     {
//         name: "computer organization & architecture",
//         year: 2,
//         sem: 4,
//         branch: "cse",
//         code: "CS404",
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21973&authkey=AMBlp61hyDkMy9o&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21971&authkey=ANKiegWq91xu3R8&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21966&authkey=ADqGLTVFD53qnBo&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21968&authkey=APGSWSmiXdx9sIw&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21970&authkey=AME8ERtHg8heMe0&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21967&authkey=AACVzHElciC2reY&em=2"
//         ]
//     },
//     {
//         name: "operating systems",
//         year: 2,
//         sem: 4,
//         branch: "cse",
//         code: "CS405",
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21978&authkey=AEJ-lj3OPN0KVW4&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21975&authkey=AO88CeqRP9ppJ7I&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21977&authkey=AKz9sv6h7h9ABP4&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21972&authkey=AI8wcgv3n7DzS0E&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%21979&authkey=AHNfpLM7--T2dfs&em=2"
//         ]
//     },
//     {
//         name: "theory of computation",
//         year: 3,
//         sem: 5,
//         branch: "cse",
//         code: "CS501",
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211044&authkey=ACwx68AgxUTw4Pg&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211045&authkey=AB5mRQVoXnsSldo&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211042&authkey=AESWE4OC8jqs1Rs&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211041&authkey=AGq5xKW54U6Wkr8&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211043&authkey=AE1wanPzOC6Vq4Q&em=2",
//         ]
//     },
//     {
//         name: "database management systems",
//         year: 3,
//         sem: 5,
//         branch: "cse",
//         code: "CS502",
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211047&authkey=AELpjciajJN2pGg&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211046&authkey=AD5Daw0NgFeXAOE&em=2"
//         ]
//     },
//     {
//         name: "data analystics",
//         year: 3,
//         sem: 5,
//         branch: "cse",
//         code: "CS503",
//     }, 
//     {
//         name: "pattern recognition",
//         year: 3,
//         sem: 5,
//         branch: "cse",
//         code: "CS503",
//     },
//     {
//         name: "cyber security",
//         year: 3,
//         sem: 5,
//         branch: "cse",
//         code: "CS503",
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211055&authkey=AB0cDz21dw4hdlg&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211051&authkey=AJGpRuK0q6IBN-c&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211049&authkey=AIsHjffK_6Qgexs&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211050&authkey=AF0ZDANJ_3_94hg&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211048&authkey=ANWnXdQtvWBpuAI&em=2",
//         ]
//     },
//     {
//         name: "internet & web technology",
//         year: 3,
//         sem: 5,
//         branch: "cse",
//         code: "CS504",
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211057&authkey=APV7BseYWfQiyxU&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211054&authkey=AB0AwOcMqzYoyGI&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211053&authkey=AFHVMvhHJuS3o44&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211052&authkey=AL52_5VAPwr2-Jo&em=2",
//         ]
//     },
//     {
//         name: "object oriented programming",
//         year: 3,
//         sem: 5,
//         branch: "cse",
//         code: "CS504", 
//     },
//     {
//         name: "introduction to database management systems",
//         year: 3,
//         sem: 5,
//         branch: "cse",
//         code: "CS504",
//     },
//     {
//         name: "machine learning",
//         year: 3,
//         sem: 6,
//         branch: "cse",
//         code: "CS601",
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211125&authkey=AM4o-DiBK5TS2mA&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211128&authkey=ACn4_H-vyqA2VWs&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211129&authkey=ALmTpdUCT02qWSs&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211127&authkey=AHhYEU0TLztfE-E&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211126&authkey=APgbDy31qtNPfPc&em=2",
//         ]
//     },
//     {
//         name: "computer networks",
//         year: 3,
//         sem: 6,
//         branch: "cse",
//         code: "CS602",
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211134&authkey=AH62qGudkhyBhnE&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211137&authkey=AMVEWtkkx3mqrNI&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211133&authkey=ADIEEeIRo3M-Ssw&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211136&authkey=AG7Ctr6lpddaFWY&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211130&authkey=AFJB-VAsOuhsut8&em=2",
//         ]
//     },
//     {
//         name: "advanced computer architecture",
//         year: 3,
//         sem: 6,
//         branch: "cse",
//         code: "CS603",   
//     },
//     {
//         name: "computer graphics & visualization",
//         year: 3,
//         sem: 6,
//         branch: "cse",
//         code: "CS603",
//     },
//     {
//         name: "compiler design",
//         year: 3,
//         sem: 6,
//         branch: "cse",
//         code: "CS603",
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211143&authkey=AFnNlUebdgOejLo&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211138&authkey=AF_vBW2yBrn1WeQ&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211135&authkey=AIGSKfbSB1uQeZM&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211132&authkey=ACudaw9J6LL1pjM&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211131&authkey=AJPrKVMI8H02IQ0&em=2",
//         ]
//     },
//     {
//         name: "knowledge management",
//         year: 3,
//         sem: 6,
//         branch: "cse",
//         code: "CS604",
//     },
//     {
//         name: "project management",
//         year: 3,
//         sem: 6,
//         branch: "cse",
//         code: "CS604",
//         url: [
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211140&authkey=APasCvvcf9kHdIs&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211141&authkey=ABAU7LYkwXZgKG4&em=2",
//             "https://onedrive.live.com/embed?cid=9F0200C1153A2AA1&resid=9F0200C1153A2AA1%211142&authkey=ALmJxQw5fvxLn4Q&em=2"
//         ]
//     },
//     {
//         name: "rural technology & community development",
//         year: 3,
//         sem: 6,
//         branch: "cse",
//         code: "CS604",
//     }, 
//     {
//         name: "computational intelligence",
//         year: 4,
//         sem: 7,
//         branch: "cse",
//         code: "CS702",
//     },
//     {
//         name: "deep and reinforcement learning",
//         year: 4,
//         sem: 7,
//         branch: "cse",
//         code: "CS702",
//     },
//     {
//         name: "wireless and mobile computing",
//         year: 4,
//         sem: 7,
//         branch: "cse",
//         code: "CS702",
//     },
//     {
//         name: "big data",
//         year: 4,
//         sem: 7,
//         branch: "cse",
//         code: "CS702",
//     },
//     {
//         name: "cryptography and information security",
//         year: 4,
//         sem: 7,
//         branch: "cse",
//         code: "CS703",
//     },
//     {
//         name: "data mining and warehousing",
//         year: 4,
//         sem: 7,
//         branch: "cse",
//         code: "CS703",
//     },
//     {
//         name: "agile software development",
//         year: 4,
//         sem: 7,
//         branch: "cse",
//         code: "CS703",
//     },
//     {
//         name: "disaster management",
//         year: 4,
//         sem: 7,
//         branch: "cse",
//         code: "CS703",
//     },
//     {
//         name: "internet of things",
//         year: 4,
//         sem: 8,
//         branch: "cse",
//         code: "CS801"
//     },
//     {
//         name: "block chain technologies",
//         year: 4,
//         sem: 8,
//         branch: "cse",
//         code: "CS802"
//     },
//     {
//         name: "cloud computing",
//         year: 4,
//         sem: 8,
//         branch: "cse",
//         code: "CS802"
//     },
//     {
//         name: "high performance computing",
//         year: 4,
//         sem: 8,
//         branch: "cse",
//         code: "CS802"
//     },
//     {
//         name: "object oriented software engineering",
//         year: 4,
//         sem: 8,
//         branch: "cse",
//         code: "CS802"
//     },
//     {
//         name: "image processing and computer vision",
//         year: 4,
//         sem: 8,
//         branch: "cse",
//         code: "CS803"
//     },
//     {
//         name: "game theory with engineering applications",
//         year: 4,
//         sem: 8,
//         branch: "cse",
//         code: "CS803"
//     },
//     {
//         name: "managing innovation and enterpreneurship",
//         year: 4,
//         sem: 8,
//         branch: "cse",
//         code: "CS803"
//     }
// ]

// Note.insertMany(notes);

Note.updateOne({name: "data analystics"}, {name: "data analytics"}).then((res) => console.log(res));