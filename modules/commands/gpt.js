const axios = require('axios');
var suffixes = "."; // CHOOSE YOUR OWN SUFFIX
var tokenGPT = "" // YOUR OPENAI_KEY

module.exports.config = {
  name: "gpt",
  version: "1.1.0",
  hasPermssion: 0,
  credits: "D-Jukie",
  description: "",
  usePrefix: false,
  commandCategory: "chatbots",
  usage: "<question>",
  cooldowns: 3
};

module.exports.onLoad = () => {
  global.oldMessageGPT = {}
  global.roleGPT = {};
}
module.exports.run = async ({ event, api, args }) => {
  let body = args.join(" ");
  if (body == "help") return api.sendMessage("Use: <prefix>gpt <content/reply>\nYou can use the ~ sign at the end for GPT to replyUse: <prefix>ai <content/reply>\nYou can use the ~ sign at the end for GPT to reply", event.threadID, event.messageID);
  if (event.type == "message_reply") {
    body = event.messageReply.body;
  }
  var role = body.split("---")[1];
  if (role) {
    body = body.split("---")[0];
    global.roleGPT[event.senderID] = role;
    delete global.oldMessageGPT[event.senderID];
  }
  if (global.roleGPT[event.senderID] == undefined) global.roleGPT[event.senderID] = "I'm ChatGPT, a programmed AI that works on messenger";
  const res = await chatGpt(event, body, role)
  return api.sendMessage(res, event.threadID, event.messageID);
}


module.exports.handleEvent = async ({ event, api }) => {
  const { body, senderID, threadID, messageID } = event;
  if (!body || senderID == api.getCurrentUserID() || !body.endsWith(suffixes) || body == suffixes || body.indexOf(`${global.config.PREFIX}${this.config.name}`) == 0) return;
  const res = await chatGpt(event, body);
  return api.sendMessage(res, threadID, messageID);
}

async function chatGpt(event, message) {
  const headers = {
    "Authorization": `Bearer ${tokenGPT}`,
    "Accept": "text/event-stream",
    "Content-Type": "application/json"
  };
  let fullPrompt = global.roleGPT[event.senderID] + "\n";
  const oldMessage = global.oldMessageGPT[event.senderID];
  if (oldMessage) {
    fullPrompt += `User: ${oldMessage.userMessage}\n`;
    fullPrompt += `ChatGPT: ${oldMessage.botMessage}\n\n`;
  }
  fullPrompt += `User: ${message}\nChatGPT: `;
  const body = {
    action: "next",
    messages: [{
      id: require('uuid').v4(),
      role: "user",
      content: { content_type: "text", parts: [fullPrompt] }
    }],
    model: "gpt-3.5-turbo",
    parent_message_id: require('uuid').v4(),
  };
  try {
    const response = await axios.post("https://bypass.churchless.tech/api/conversation", body, { headers });
    const data = "{" + response.data.split("data: {").pop().split("\n")[0];
    global.oldMessageGPT[event.senderID] = {
      userMessage: message,
      botMessage: JSON.parse(data).message?.content.parts[0]
    };
    return JSON.parse(data).message?.content.parts[0] ?? null;
  } catch (error) {
    return "Sorry, I'm having some problems. Please try again later!";
  }
}