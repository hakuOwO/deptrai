const fs = require('fs');
const request = require('request');

module.exports.config = {
    name: "sendnoti",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "TruongMini",
    description: "",
    commandCategory: "Tiแปn รญch",
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
            let text = `๐๐จฬฃฬ๐ข ๐๐ฎ๐ง๐  : ${body}\n\n๐๐ฎฬฬ ${name}  ๐๐ก๐จฬ๐ฆ ${(await Threads.getInfo(threadID)).threadName || "Unknow"}`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `๐๐จฬฃฬ๐ข ๐๐ฎ๐ง๐  : ${body}\n\n๐๐ฎฬฬ ${name} ๐๐ซ๐จ๐ง๐  ๐๐ก๐จฬ๐ฆ ${(await Threads.getInfo(threadID)).threadName || "Unknow"}`);
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
            let text = `๐๐จฬฃฬ๐ข ๐๐ฎ๐ง๐  : ${body}\n\n๐๐ฎฬฬ ${name} With Love!\n๐๐๐ฉ๐ฅ๐ฒ ๐๐ข๐ง ๐๐ก๐ฬฬ๐ง ๐๐ฬ๐ฒ ๐๐ฬฬ ๐๐ฬ๐จ ๐๐ฬฬ ๐๐๐ฆ๐ข๐ง`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `${body}\n\nFrom ${name} With Love!\nreply tin nhแบฏn nร y ฤแป bรกo vแป admin`);
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
    let text = `๐๐จฬฃฬ๐ข ๐๐ฎ๐ง๐  : ${args.join(" ")}\n\n๐๐ฎฬฬ ${await Users.getNameUser(senderID)} \n๐๐๐ฉ๐ฅ๐ฒ ๐๐ข๐ง ๐๐ก๐ฬฬ๐ง ๐๐ฬ๐ฒ ๐๐ฬฬ ๐๐ฬ๐จ ๐๐ฬฬ ๐๐๐ฆ๐ข๐ง`;
    if(event.type == "message_reply") text = await getAtm(messageReply.attachments, `๐๐จฬฃฬ๐ข ๐๐ฎ๐ง๐  : ${args.join(" ")}\n\n๐๐ฎฬฬ ${await Users.getNameUser(senderID)}\n๐๐๐ฉ๐ฅ๐ฒ ๐๐ข๐ง ๐๐ก๐ฬฬ๐ง ๐๐ฬ๐ฒ ๐๐ฬฬ ๐๐ฬ๐จ ๐๐ฬฬ ๐๐๐ฆ๐ข๐ง`);
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