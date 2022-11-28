 const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "....",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, args, Threads }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

  var tl = ["Quát do nem ?", "Dì dọ con heo", "Kêu Con cặc gì hả", "Yêu anhh ♥", "Kêu con cặc", "Táng chết mẹ h kêu cái gì", "Con đĩ nào kêu tao đấy!", "Em nứng hả em?", "Nói gì thế con lợn", "Em đây~~~~", "Biết rồi, Triệu đẹp trai ok", "Oi Oi Oi yamateee", "Yêu Bot hong", "Đá chết mẹ h kêu qq j?", "đang ẻ kêu qq j", "Đừngg sướng lắm anh ơi", "Rên với em nhé a á á á", "ớ ớ ớ ớ á á á á", "Á đù thằng này cu bé", "Vl con này thích tao m ạ", "Chịch ko ạ vã quá!!!", "Tao báo công an", "cô đơn quá  huhu :((", "Show nách đi bạn rồi mình nói chuyện" ,"Làm chồng em ko ạ?", "Đừng spam em nha :<<, ban chết mẹ bạn á", "Đừng đè em mạnh!!! sướng áaa", "Đút tutu thôi em đau :'(", "Yêu cậu như một cực hình\nNhấp lên nhấp xuống hai mình cùng rên", "Yêu em ko?", "Lên giường k em??"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "180520021")) {
    return api.sendMessage("Tạm biệt mng ><", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

   if ((event.body.toLowerCase() == "yêu bot") || (event.body.toLowerCase() == "yeu bot")) {
    return api.sendMessage("Hmm... Bot ngại lắm thôi yêu admin của bot nhé :))", threadID);
  };

   if ((event.body.toLowerCase() == "bot ơi") ||  (event.body.toLowerCase() == "bot ơi")) {
    return api.sendMessage("Hả bot đây nè :3", threadID);
  };

  if ((event.body.toLowerCase() == "cc") || (event.body.toLowerCase() == "Cc")) {
    return api.sendMessage("️Nói jz con lợn này", threadID);
  };
  
   if ((event.body.toLowerCase() == "bot có yêu em không") || (event.body.toLowerCase() == "bot yeu em khong")) {
    return api.sendMessage("Hi, Bot yêu em hơn cả ny em cơ, yêu bot đi <3", threadID);
  };

   if ((event.body.toLowerCase() == "out đi bot")) {
    return api.sendMessage("À ừ vậy thôi tao đi cảm ơn bọn mày trong thời gian qua cùng tao vui vẻ....vậy thôi tao đi pp ☺😊", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "đĩ bot")) {
    return api.sendMessage("Thành viên đã cố ý chửi bot, do đó đã vi phạm luật bot nên bot sẽ out và muốn add lại thì xin liên hệ qua admin qua Fb: Hợi Bú Liếm", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == "bot óc chó")) {
    return api.sendMessage("Thành viên đã cố ý chửi bot, do đó đã vi phạm luật bot nên bot sẽ out và muốn add lại thì xin liên hệ qua admin qua Fb: Hợi Bú Liếm", threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID));
  };

  if ((event.body.toLowerCase() == ":<") || (event.body.toLowerCase() == ":>")) {
    return api.sendMessage("Con đĩ này 😠", threadID);
  };
  
  if ((event.body.toLowerCase() == "=))))") || (event.body.toLowerCase() == ":))))")) {
    return api.sendMessage("cười qq j con đĩ kia", threadID);
  };

  if ((event.body.toLowerCase() == "cmm") || (event.body.toLowerCase() == "Cmm")) {
    return api.sendMessage("Bất hiếu cha sinh mẹ đẻ mà mày nói thế là hỏng người rồi", threadID);
  };

  if ((event.body.toLowerCase() == "ngu") || (event.body.toLowerCase() == "Ngu")) {
    return api.sendMessage("Ngu cái lồn mẹ mày ", threadID);
  };

  if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "Hi")) {
    return api.sendMessage("Hé lu bạn nhỏ ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hí") || (event.body.toLowerCase() == "Hí")) {
    return api.sendMessage("Chào pé iu của anh ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "chào") || (event.body.toLowerCase() == "Chào")) {
    return api.sendMessage("Hello honey ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hi mn") || (event.body.toLowerCase() == "Hi mn")) {
    return api.sendMessage("Xin chào zợ iu nhó❤️", threadID);
  };

  if ((event.body.toLowerCase() == "bot yêu ai") || (event.body.toLowerCase() == "Bot yêu ai")) {
    return api.sendMessage("Bot iu mỗi admin của bot thoi❤️", threadID);
  };

  if ((event.body.toLowerCase() == "Hello") || (event.body.toLowerCase() == "Hello")) {
    return api.sendMessage("Chào bạn nhó ❤️", threadID);
  };

 if ((event.body.toLowerCase() == ":v") || (event.body.toLowerCase() == ":V")) {
    return api.sendMessage("Tương ️tác đi, icon đuồi bầu", threadID);
  };

  if ((event.body.toLowerCase() == ":))") || (event.body.toLowerCase() == ":)))")) {
    return api.sendMessage("Cười qq gì ? dui lắm hả ", threadID);
  };
  
  if ((event.body.toLowerCase() == "ừ") || (event.body.toLowerCase() == "Ừ")) {
    return api.sendMessage("Ừ ừ cái gì, dạ đi cho cây kẹo 🍭", threadID);
  };
  
  if ((event.body.toLowerCase() == ":((") || (event.body.toLowerCase() == ":(((")) {
    return api.sendMessage("Bạn iu sao lại buồn thế nói đi bot nghe nè ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "sầu") || (event.body.toLowerCase() == "Sầu")) {
    return api.sendMessage("Đừng buồn nữa, để bot hát cho bạn nghe nhá", threadID);
  };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "HaHa")) {
    return api.sendMessage("Cười cc", threadID);
  };

  if ((event.body.toLowerCase() == "bot iu dun hong") || (event.body.toLowerCase() == "Bot iu dun hong")) {
    return api.sendMessage("Iu dun lắm saaaaaaaa", threadID);
  };

  if ((event.body.toLowerCase() == "hảo") || (event.body.toLowerCase() == "Hảo")) {
    return api.sendMessage("Đb hảo hoài : )", threadID);
  };

  if ((event.body.toLowerCase() == ":v") || (event.body.toLowerCase() == ":V")) {
    return api.sendMessage("icon cái đuồi bầu", threadID);
  };

  if ((event.body.toLowerCase() == "=))") || (event.body.toLowerCase() == "=)))")) {
    return api.sendMessage("Ơ kìa con đĩ này sao icon quài ta", threadID);
  };

  if ((event.body.toLowerCase() == "=))))") || (event.body.toLowerCase() == "=)))))")) {
    return api.sendMessage("Đũy l này tưởng né được tao", threadID);
  };

  if ((event.body.toLowerCase() == "=))))))") || (event.body.toLowerCase() == ":vv")) {
    return api.sendMessage("Thì ra con đĩ này thích dùng icon", threadID);
  };

  if ((event.body.toLowerCase() == "rồi") || (event.body.toLowerCase() == "Rồi")) {
    return api.sendMessage("Biết cl gì mà rồi", threadID);
  };

  if ((event.body.toLowerCase() == "ừa") || (event.body.toLowerCase() == "Ừa")) {
    return api.sendMessage("Ừa ừa cái gì, dạ đi cho cây kẹo 🍭", threadID);
  };

  if ((event.body.toLowerCase() == "dạ") || (event.body.toLowerCase() == "Dạ")) {
    return api.sendMessage("Ngu kêu dạ cũng dạ hả?, thử nói đéo đi", threadID);
  };

  if ((event.body.toLowerCase() == "đéo") || (event.body.toLowerCase() == "Đéo")) {
    return api.sendMessage("con đĩ mắc dại này phải trị lại mới được", threadID);
  };


  if ((event.body.toLowerCase() == "hát đi bot") || (event.body.toLowerCase() == "Hát đi bot")) {
    return api.sendMessage("Oke chuẩn bị nha\nSau đây bot sẽ hát bài Buông hàng nhé\nNhiều đêm dài sương mùa đông tuyết rơi hoài lòng ai đang nhớ nhà\nĐường buông hàng bên này như rap thiên hà quê nhà còn quá xa\nNhiều đêm ngồi roll điếu K\nMama à đừng xót xa\nLang thang không về nhà đôi chân đang đi tìm dola\nChơi thuốc everynight(Why?)\nNhiều đêm dài ai còn đang vẫn miệt mài đợi chờ hình bóng ai\nChơi thuốc everynight(Why?)\nNhiều đêm dài ai còn đang ngóng trông hoài đợi chờ ngày nắng mai\nVà nhiều ngày tháng muốn cầu và một mình trốn trong nhà\nNhiều lần lại làm tao bán thêm đồ và lỗi lầm với ông già\nNgười tình ngày nào nay bước theo chồng mà tan một giấc mơ hồng\nĐành ngậm ngùi nhìn em bước qua phà mà buồn phiền ở trong lòng\nVà những ngày tháng buông hàng homie lowkey gang\nHợp đồng tiền đề buôn bán cocain nhưng không đi đến thiên đàn\nMama luôn muốn con sống an toàn và con luôn phải đàng hoàng\nCon biết con biết Châu Á da vàng là con không thể đầu hàng", threadID);
  };

  if ((event.body.toLowerCase() == "triệu") || (event.body.toLowerCase() == "Triệu")) {
    return api.sendMessage("Gọi admin bot làm gì đấy, có thắc mắc thì nt qua fb admin đi: Hoàng Triệu", threadID);
  };

  if ((event.body.toLowerCase() == "chửi nó đi bot") || (event.body.toLowerCase() == "Chửi nó đi bot")) {
    return api.sendMessage("Trời đất dung hoa, vạn vật sinh sôi Con mẹ mày lôi thôi, đầu xanh mỏ đỏ Gặm cỏ thay cơm, đầu tóc bờm xờm Khạc đờm tung tóe, tao địt con mẹ mày  Như lồn trâu lồn chó, lồn bó xi măng Lồn chằng mạng nhện mà lồn bện là khoai Lồn quai lá mít, lồn đít lồn cơm Lồn tơm lồn đậm, lồn đười ươi nó địt Lồn con vịt nó phang, lồn giang mai lồn ỉa chảy Lồn nhảy hiphop, lồn hàng xốp làm hàng hiệu Lồn hàng triệu con súc vật, mà tao địt con đĩ mẹ mày Đứng từ trên cao, mà lao đầu xuống đất Địt lất phất như mưa rơi, địt tơi bởi như bom đạn Địt lãng mạn như Romeo và Juliet Địt khoét cái lỗ sâu, địt khắp cái lỗ bướm Địt đứng tim phổi, địt cặp mắt nai Mà địt chai lỗ đít, địt khít cái lỗ lồn  Con đĩ mẹ mày, mà tao địt con đĩ mẹ mày Như gà mái mổ giun, như chó càn cắn dậu Thằng cậu mày hiếp dâm, tao bật cái cánh cửa Cho con mẹ mày nằm ngửa, bửa nát tử cung Khai thông buồng trứng, hứng full tinh trùng Địt bồi hồi cảm xúc, địt như bánh đúc ra lò Địt như mấy con phò bên hồ Hoàn Kiếm Địt như mấy con điếm bên chợ Đồng Xuân  Địt đằng chân mà lên đằng đầu Địt sập cầu sập cống Địt con mẹ mày sống Địt con mẹ mày chết Cho con mẹ mày AIDS Cho con mẹ mày sida Mà tao địt từ Nga, mà qua tới Pháp  Tao lại địt về Việt Nam mà ra hàng Cỏ  Và một trăm thằng da đỏ, một nghìn thằng da đen Nó lại bem vào cái lỗ lồn con đĩ mẹ mày Địt vô đầu gối Địt thối màng trinh Địt bất thình lình Địt kiểu âu tướng Địt hướng mặt trời Địt chơi địt bời Địt rakiểu mới Địt tới địt lui Địt búi cả đầu Địt đâu cũng chết Địt bết cả lồn Địt kiểu teo kiểu héo Kiểu ngang kiểu dọc Kiểu không cần khoa học Cũng chọc thủng lồn con đĩ mẹ mày Cái thằng đâm cha chém chú Bóp vú chị dâu Cạo đầu em nhỏ Bắn bỏ em trai Kì lồn em gái Đái ỉa ra sông Như công xỉa cánh Như đánh chó hoang Đập đầu chó thiến Chiềng hàng chiềng trại Bắn hại chim non Đập đầu chim cú Bú lồn chim sẻ Bẻ lồn chim ri Kì lồn chim cắt Và đút buồi vào chim trâu Địt cái lồn mẹ mày Đi với phật thì mặc áo cà sa Đi với mà thìmặc áo giấy Mà cái lồn con đĩ mẹ mày không đầy chấy thì cũng đầy ve mà giữa cái hột le", threadID);
  };

  if ((event.body.toLowerCase() == "hăi") || (event.body.toLowerCase() == "Hăi")) {
    return api.sendMessage("l mẹ hăi là cc j nứng hả :)", threadID);
  };

  if ((event.body.toLowerCase() == "chào cậu") || (event.body.toLowerCase() == "Chào cậu")) {
    return api.sendMessage("Hí chào bạn ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "-.-") || (event.body.toLowerCase() == "-,-")) {
    return api.sendMessage("️Thái độ cl gì ? táng xéo hán á", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi nào mng") || (event.body.toLowerCase() == "Tt đi nào mng")) {
    return api.sendMessage("️Hong tương tác xíu qtv kick hết bây giờ", threadID);
  };

  if ((event.body.toLowerCase() == "ờ") || (event.body.toLowerCase() == "Ờ")) {
    return api.sendMessage("️Ờ cái lồn", threadID);
  };

  if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "Nn nha mng")) {
    return api.sendMessage("️Ngủ ngon ạ <3 Chúc mọi người mơ siêu đẹp <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot yêu t ko") || (event.body.toLowerCase() == "Bot yêu trân hong")) {
    return api.sendMessage("️Đồng í 2 tay 2 chân iu b nhó :33", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai z bot") || (event.body.toLowerCase() == "Admin m là ai vậy bot")) {
    return api.sendMessage("️Admin tao tên Hợi có gì dùng lệnh !ad để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "flop quá") || (event.body.toLowerCase() == "Flop quá")) {
    return api.sendMessage("️Ra tương tác kh xíu qtv kick hết bây giờ cđ ơi", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "Clmm bot")) {
    return api.sendMessage("️Chửi cái đb m hả con lợn này : )", threadID);
  };

  if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "Bot cc")) {
    return api.sendMessage("️Bố m ban cho m khỏi dùng bây giờ : )", threadID);
  };

  if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "Cc bot")) {
    return api.sendMessage("️Nói tiếng nữa bố cho ăn ban : )", threadID);
  };

  if ((event.body.toLowerCase() == "bot ngu quá") || (event.body.toLowerCase() == "Bot dthw quá")) {
    return api.sendMessage("️dạ quá khen ạ hihi :>", threadID);
  };
  
  if ((event.body.toLowerCase() == "đm") || (event.body.toLowerCase() == "Đm")) {
    return api.sendMessage("️Thích loạn luân hay gì mà đm hoài vậy", threadID);
  };

  if ((event.body.toLowerCase() == "ko ai thương t hết") || (event.body.toLowerCase() == "ko ai thuong t het")) {
    return api.sendMessage("️Thôi ngoan nào bot thương bạn mà <3 <3 ", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu admin bot ko") || (event.body.toLowerCase() == "bot co yeu admin bot ko")) {
    return api.sendMessage("Có, yêu anh ấy nhất đừng hòng cướp của tôi", threadID);
  };

  if ((event.body.toLowerCase() == "bot có người yêu chưa") || (event.body.toLowerCase() == "bot co nguoi yeu chua")) {
    return api.sendMessage("Rồi ạ, là cậu đấy <3", threadID);
  };

  if ((event.body.toLowerCase() == "im đi bot") || (event.body.toLowerCase() == "Im đi bot")) {
    return api.sendMessage("Không đấy thì làm sao 😼", threadID);
  };

  if ((event.body.toLowerCase() == "cút đi bot") || (event.body.toLowerCase() == "Cút đi bot")) {
    return api.sendMessage("Mày cút rồi bố mày cút :))))", threadID);
  };

  if ((event.body.toLowerCase() == "bot chửi cái lon gì") || (event.body.toLowerCase() == "Bot chửi cái lon gì")) {
    return api.sendMessage("Chửi mày đấy, nhục vãi hahaha :>>, còn hỏi", threadID);
  };

  if ((event.body.toLowerCase() == "bot có buồn ko") || (event.body.toLowerCase() == "Bot có buồn ko")) {
    return api.sendMessage("Mng không chửi bot là bot vui lắm rồi <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu t ko") || (event.body.toLowerCase() == "Bot co yeu t ko")) {
    return api.sendMessage("Dạ có yêu cậu và mọi người nhiều lắm", threadID);
  };

  if ((event.body.toLowerCase() == "bot đi ngủ đi") || (event.body.toLowerCase() == "Bot đi ngủ đi")) {
    return api.sendMessage("Tớ là bot, cậu là người nên cần đi ngủ nè <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot ăn cơm chưa") || (event.body.toLowerCase() == "Bot ăn cơn chưa")) {
    return api.sendMessage("Mình nhìn cậu ăn là thấy no rồi <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương t ko") || (event.body.toLowerCase() == "bot co thuong t ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "admin là ai z") || (event.body.toLowerCase() == "Admin là ai z")) {
    return api.sendMessage("Dĩ nhiên rồi có gì liên hệ anh ấy nha <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot làm thơ đi") ||  (event.body.toLowerCase() == "Bot làm thơ đi")) {
    return api.sendMessage("Yêu cậu như một cực hình\nNhấp lên nhấp xuống hai mình cùng rên", threadID);
  };

  if ((event.body.toLowerCase() == "cc") ||  (event.body.toLowerCase() == "Cc")) {
    return api.sendMessage("Đừng chửi thề , mình méc Qtv đóa :)", threadID);
  };

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }