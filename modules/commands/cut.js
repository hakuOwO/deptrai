const fs = require("fs");
module.exports.config = {
	name: "Cut",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "Không cần dấu lệnh",
	usages: "Cut",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("cút")==0 || (event.body.indexOf("cút")==0)) {
		var msg = {
				body: "Cái đồ ăn hại",
				attachment: fs.createReadStream(__dirname + `/noprefix/cut.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}