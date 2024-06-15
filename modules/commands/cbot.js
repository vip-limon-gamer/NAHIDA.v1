module.exports.config = {
  name: "bot",
  version: "1.0.1",
  hasPermission: 0,
  credits: "Md. Rakib",
  description: "Noprefix",
  commandCategory: "noPrefix",
  usages: "[bot]",
  cooldowns: 5,
  usePrefix: false
};

module.exports.handleEvent = async function ({ api, event, Users }) {
  var { threadID, messageID } = event;

  var tl = [ 
    "Yes???",
    "chat me.",
    "What??",
    "bla-bla.",
    "be quiet.",
    "how stupid you are.",
    "are you okay?",
    "wanna fight?",
    "আস্সলামু আলাইকুম। ",
    "কেমন আছো সোনা?",
    "কি করো জানু",
    "ভাত খেয়োছো বাবু",
    "তোমার গার্লফ্রেন্ড কি করে জানু",
    "তোমার বাসার সবাই ভালো আছে?",
    "তুমি ইনবক্সে আসো জলদি!",
    "ও জানু I Love You গো",
    "জান চলো না ঘুরতে যাই",
    "ঘুমাবা না বাবু",
    "আজকে দেখা করবা আমার সাথে?",
    "তুমি ত অনেক কিউট বাবু",
    "yummy my hotdog my tummy.",
    "ugh hahaha" 
  ];

  var rand = tl[Math.floor(Math.random() * tl.length)];
  let yan = event.body ? event.body.toLowerCase() : '';

  if (yan.indexOf("bot") === 0) {
    api.setMessageReaction("💗", event.messageID, (err) => {}, true);
    api.sendTypingIndicator(event.threadID, true);

    let userH = event.senderID;
    const userInfo = global.data.userName.get(userH) || await Users.getUserInfo(userH);
    if (event.senderID == api.getCurrentUserID()) return;

    var msg = {
      body: "@" + userInfo + ", " + rand, 
      mentions: [{
        tag: "@" + userInfo,
        id: userH
      }]
    };

    setTimeout(function() {
      return api.sendMessage(msg, threadID, messageID);
    }, 2000);
  }

  if (
    yan.includes("haha") ||
    yan.includes("lmao") ||
    yan.includes("lol") ||
    yan.includes("yahoo") ||
    yan.includes("yahuu") ||
    yan.includes("agoy") ||
    yan.includes("aguy") ||
    yan.includes("babu") ||
    yan.includes("baby") ||
    yan.includes("jan") ||
    yan.includes("dur") ||
    yan.includes("oh") ||
    yan.includes("xd")
  ) {
    return api.setMessageReaction("😆", event.messageID, (err) => {}, true);
  } 

  if (
    yan.includes("ish") ||
    yan.includes("sad") ||
    yan.includes("agoi") ||
    yan.includes("ahare") ||
    yan.includes("shit") ||
    yan.includes("pain") ||
    yan.includes("opps")
  ) {
    return api.setMessageReaction("🥲", event.messageID, (err) => {}, true);
  }
};

module.exports.run = async function ({ api, event, __GLOBAL }) {};
