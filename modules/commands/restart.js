module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "ReStart Bot.",
      usePrefix: true,
	commandCategory: "Admin",
	cooldowns: 0
        };
module.exports.run = async function({event, api, args}) {
   api.sendMessage("Bot  Đang Khởi Động Lại",event.threadID, () =>process.exit(1));
}