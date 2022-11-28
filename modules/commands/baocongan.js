const fs = require("fs");
module.exports.config = {
	name: "baocongan",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "Không cần dấu lệnh",
	usages: "baocongan",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("tao báo công an")==0 || (event.body.indexOf("Tao báo công an")==0)) {
		var msg = {
				body: "Mấy đĩ lồn",
				attachment: fs.createReadStream(__dirname + `/noprefix/baocongan.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}