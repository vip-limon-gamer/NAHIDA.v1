module.exports.config = {
    name: "war",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "... - Long LTD",
    description: "War boxchat",
    usePrefix: true,
    commandCategory: "fun",
    usages: "war chất",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
 var mention = Object.keys(event.mentions)[0];
    
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("তোরে ফাসিতে লটকাইয়া চু*দমু💦");
setTimeout(() => {a({body: "তর হোগায় ইনপুট, তর বৌয়ের ভোদায় আউটপুট👉👌" })}, 3000);
setTimeout(() => {a({body: "তোর ধোন টাইনা তোর পিছন দিয়া ঢুকামু খা*ঙ্কিরপোলা"})}, 5000);
setTimeout(() => {a({body: "মোবাইল ভাইব্রেশন কইরা তুর পুকটিতে ভরবো" })}, 7000);
setTimeout(() => {a({body: "লাত্থায় তর মার আনরেজিস্টার্ড শ্বশুরবাড়ী ফাকিস্তান পাঠায় দিমু।" })}, 9000);
setTimeout(() => {a({body: "তর ভো*দায় শিরিষ কাগজ দিয়া ঘইষা দিমু" })}, 12000);
setTimeout(() => {a({body: "ভুস্কি খাঙ্কি মাগির পোলা" })}, 15000);
setTimeout(() => {a({body: "জং ধরা লোহা দিয়া পাকিস্তানের মানচিত্র বানাই্য়া তোর পিছন দিয়া ঢুকামু।" })}, 17000);
setTimeout(() => {a({body: "তর  বিচি বেইচা কটকটি খামু।" })}, 20000);
setTimeout(() => {a({body: "তর বৌয়ের ভো*দায় মাগুর মাছ চাষ করুম।" })}, 23000);
setTimeout(() => {a({body: "আচো*দা টেংড়ি ভাইঙা হো*গায় ভইরা দিমু" })}, 25000);
setTimeout(() => {a({body: "মাদারচো*দ ভাগ🥺"})} , 115000);




  
  }