const fs = require('fs');
const request = require('request');

module.exports.config = {
    name: "sendnoti",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "TruongMini",
    description: "",
    commandCategory: "Tiện ích",
    usages: "[msg]",
    cooldowns: 3,
}

let atmDir = [];

const getAtm = (atm, body) => new Promise(async (resolve) => {
    let msg = {}, attachment = [];
    msg.body = body;
    for(let eachAtm of atm) {
        await new Promise(async (resolve) => {
            try {
                let response =  await request.get(eachAtm.url),
                    pathName = response.uri.pathname,
                    ext = pathName.substring(pathName.lastIndexOf(".") + 1),
                    path = __dirname + `/cache/${eachAtm.filename}.${ext}`
                response
                    .pipe(fs.createWriteStream(path))
                    .on("close", () => {
                        attachment.push(fs.createReadStream(path));
                        atmDir.push(path);
                        resolve();
                    })
            } catch(e) { console.log(e); }
        })
    }
    msg.attachment = attachment;
    resolve(msg);
})

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads }) {
    const { threadID, messageID, senderID, body } = event;
    let name = await Users.getNameUser(senderID);
    switch (handleReply.type) {
        case "sendnoti": {
            let text = `𝐍𝐨̣̂𝐢 𝐃𝐮𝐧𝐠 : ${body}\n\n𝐓𝐮̛̀ ${name}  𝐍𝐡𝐨́𝐦 ${(await Threads.getInfo(threadID)).threadName || "Unknow"}`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `𝐍𝐨̣̂𝐢 𝐃𝐮𝐧𝐠 : ${body}\n\n𝐓𝐮̛̀ ${name} 𝐓𝐫𝐨𝐧𝐠 𝐍𝐡𝐨́𝐦 ${(await Threads.getInfo(threadID)).threadName || "Unknow"}`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "reply",
                    messageID: info.messageID,
                    messID: messageID,
                    threadID
                })
            });
            break;
        }
        case "reply": {
            let text = `𝐍𝐨̣̂𝐢 𝐃𝐮𝐧𝐠 : ${body}\n\n𝐓𝐮̛̀ ${name} With Love!\n𝐑𝐞𝐩𝐥𝐲 𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧 𝐍𝐚̀𝐲 𝐃𝐞̂̉ 𝐁𝐚́𝐨 𝐕𝐞̂̀ 𝐀𝐝𝐦𝐢𝐧`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `${body}\n\nFrom ${name} With Love!\nreply tin nhắn này để báo về admin`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "sendnoti",
                    messageID: info.messageID,
                    threadID
                })
            }, handleReply.messID);
            break;
        }
    }
}

module.exports.run = async function ({ api, event, args, Users }) {
    const { threadID, messageID, senderID, messageReply } = event;
    if (!args[0]) return api.sendMessage("Please input message", threadID);
    let allThread = global.data.allThreadID || [];
    let can = 0, canNot = 0;
    let text = `𝐍𝐨̣̂𝐢 𝐃𝐮𝐧𝐠 : ${args.join(" ")}\n\n𝐓𝐮̛̀ ${await Users.getNameUser(senderID)} \n𝐑𝐞𝐩𝐥𝐲 𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧 𝐍𝐚̀𝐲 𝐃𝐞̂̉ 𝐁𝐚́𝐨 𝐕𝐞̂̀ 𝐀𝐝𝐦𝐢𝐧`;
    if(event.type == "message_reply") text = await getAtm(messageReply.attachments, `𝐍𝐨̣̂𝐢 𝐃𝐮𝐧𝐠 : ${args.join(" ")}\n\n𝐓𝐮̛̀ ${await Users.getNameUser(senderID)}\n𝐑𝐞𝐩𝐥𝐲 𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧 𝐍𝐚̀𝐲 𝐃𝐞̂̉ 𝐁𝐚́𝐨 𝐕𝐞̂̀ 𝐀𝐝𝐦𝐢𝐧`);
    await new Promise(resolve => {
        allThread.forEach((each) => {
            try {
                api.sendMessage(text, each, (err, info) => {
                    if(err) { canNot++; }
                    else {
                        can++;
                        atmDir.forEach(each => fs.unlinkSync(each))
                        atmDir = [];
                        global.client.handleReply.push({
                            name: this.config.name,
                            type: "sendnoti",
                            messageID: info.messageID,
                            messID: messageID,
                            threadID
                        })
                        resolve();
                    }
                })
            } catch(e) { console.log(e) }
        })
    })
    api.sendMessage(`Send to ${can} thread, not send to ${canNot} thread`, threadID);
}