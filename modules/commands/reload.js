module.exports.config = {
	name: "reload",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "Chill with Tea",
	description: "Khแปi ฤแปng lแบกi Bot",
	commandCategory: "Penguin",
	usages: "reload + time",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
 const permission = ["100002637836730","100036576590462"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("๐ค๐๐ฬ ๐ซ๐๐ผฬฬ๐ป๐ด ๐๐ฬ ๐๐ ๐๐ป๐ต ๐ฅ๐ผฬฬ๐ถ ๐๐ป๐ต ๐๐ต๐ผ ๐ฅ๐ฒ๐น๐ผ๐ฎ๐ฑ", event.threadID, event.messageID);
	const { threadID, messageID } = event;
	var time = args.join(" ");
	var rstime = "68";
	if (!time) rstime = "69";
	else rstime = time;
	api.sendMessage(`๐๐ก๐ฎ๐ฬฬ๐ง ๐๐ขฬฃ ๐๐๐ฌ๐๐ญ ๐๐จ๐ญ ๐๐๐ฎ ${rstime} ๐๐ถ๐ฎฬ๐ ๐ก๐ฬฬ๐ฎ   !`, threadID);
	return setTimeout(() => { api.sendMessage("๐๐ข๐ฬฬ๐ง ๐๐ฬ๐ง๐ก ๐๐ฎ๐ฬ ๐๐ซ๐ขฬ๐ง๐ก ๐๐๐ฅ๐จ๐๐ ๐๐จ๐ญ",event.threadID,() => process.exit(1) )},	rstime * 1000);
               }