const Discord = require("discord.js");
const conf = require("../../configs/sunucuayar.json");
const { noanitro, noanetflix, noaspotify, noaexxen, noablutv} = require("../../configs/emojis.json")

module.exports = {
  conf: {
    aliases: [],
    name: "ecrolalma",
    owner: true,
  },

  run: async (client, message, args) => {
    client.api.channels(message.channel.id).messages.post({ data: {"content":`Merhaba **Revulion** üyeleri,\nÇekiliş katılımcısı alarak ${noanitro} , ${noaspotify} , ${noanetflix} , ${noaexxen} , ${noablutv} gibi çeşitli ödüllerin sahibi olabilirsiniz.\nEtkinlik katılımcısı alarak çeşitli etkinliklerin yapıldığı anlarda herkesten önce haberdar olabilirsiniz ve çekilişlere önceden katılma hakkı kazanabilirsiniz.\n\n__Aşağıda ki butonlara basarak siz de bu ödülleri kazanmaya hemen başlayabilirsiniz!__`,"components":[{"type":1,"components":[

        {"type":2,"style":3,"custom_id":"buttoncekilis","label":"🎁 Çekiliş Katılımcısı"},
        {"type":2,"style":4,"custom_id":"buttonetkinlik","label":"🎉 Etkinlik Katılımcısı"}
        
        ]}]} })
  },
};

  
