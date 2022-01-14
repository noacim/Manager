const client = global.client;
const { Collection } = require("discord.js");
const inviterSchema = require("../schemas/inviter");
const inviteMemberSchema = require("../schemas/inviteMember");
const coin = require("../schemas/coin");
const gorev = require("../schemas/invite");
const otokayit = require("../schemas/otokayit");
const regstats = require("../schemas/registerStats");
const conf = require("../configs/sunucuayar.json");
const ayar = require("../configs/sunucuayar.json")
const settings = require("../configs/settings.json")
const moment = require("moment");
const { star, green, red } = require("../configs/emojis.json")


module.exports = async (member) => {
  let guvenilirlik = Date.now()-member.user.createdTimestamp < 1000*60*60*24*7;
  if (guvenilirlik) {
  if(ayar.fakeAccRole) member.roles.add(ayar.fakeAccRole).catch();
  } else if(ayar.unregRoles) member.roles.add(ayar.unregRoles).catch();
  if (member.user.username.includes(ayar.tag)) { member.setNickname(`${ayar.tag} İsim ' Yaş`).catch(); }
  else { member.setNickname(`${ayar.ikinciTag} İsim ' Yaş`).catch();}
  
  if (member.user.username.includes(ayar.tag)) {
    await member.roles.add(ayar.ekipRolu)
    await member.roles.add(ayar.unregRoles)
  client.channels.cache.get(ayar.ekipLogChannel).send(`<@${member.id}> adlı kişi sunucumuza taglı şekilde katıldı, isminde ${ayar.tag} sembolü bulunuyor.`)
 
  }

    let otoreg = await otokayit.findOne({
      userID: member.id
    })

   const tagModedata = await regstats.findOne({ guildID: settings.guildID })
    if (tagModedata && tagModedata.tagMode === false) {
      if (otoreg) {
        if (member.manageable) await member.roles.set(otoreg.roleID)
        member.setNickname(`${ayar.tag} ${otoreg.name}`);
       if(ayar.chatChannel && client.channels.cache.has(ayar.chatChannel)) client.channels.cache.get(ayar.chatChannel).send(`Aramıza hoşgeldin **${member}**! Sunucumuzda daha önceden kayıtın bulunduğu için direkt içeriye alındınız. Kuralları okumayı unutma!`).then(x => x.delete({timeout: 10000})) 
      }
}

  let memberGün = moment(member.user.createdAt).format("DD");
  let memberTarih = moment(member.user.createdAt).format("YYYY HH:mm:ss");
  let memberAylar = moment(member.user.createdAt).format("MM").replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık");
  let üyesayısı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
    

  const channel = member.guild.channels.cache.get(ayar.invLogChannel);
  const kayitchannel = member.guild.channels.cache.get(ayar.teyitKanali);
  const kurallar = member.guild.channels.cache.get(ayar.kurallar);
  if (!channel) return;
  if (member.user.bot) return;

  const gi = client.invites.get(member.guild.id).clone() || new Collection().clone();
  const invites = await member.guild.fetchInvites();
  const invite = invites.find((x) => gi.has(x.code) && gi.get(x.code).uses < x.uses) || gi.find((x) => !invites.has(x.code)) || member.guild.vanityURLCode;
  client.invites.set(member.guild.id, invites);

if (invite === member.guild.vanityURLCode) {
kayitchannel.wsend(`
${member.guild.name}'e Hoşgeldin ${member}! Hesabın ${memberGün} ${memberAylar} ${memberTarih} tarihinde oluşturulmuş. ${guvenilirlik ? `Şüpheli! ${red}` : `Güvenli! ${green}` }\n 
Sunucuya erişebilmek için "V. Confirmed" odalarında kayıt olup isim yaş belirtmen gerekmektedir.\n
Sunucu kurallarımız ${kurallar} kanalında belirtilmiştir. Unutma sunucu içerisinde ki ceza işlemlerin kuralları okuduğunu varsayarak gerçekleştirilecek.\n
Seninle beraber **${üyesayısı}** kişiyiz.Sunucu Özel URL tarafından davet edildin! :tada: :tada: :tada:`);
channel.wsend(`${member}, sunucuya katıldı! Davet Eden: **Sunucu Özel URL** :tada:`)
return }
if (!invite.inviter) return;
await inviteMemberSchema.findOneAndUpdate({ guildID: member.guild.id, userID: member.user.id }, { $set: { inviter: invite.inviter.id, date: Date.now() } }, { upsert: true });
if (Date.now() - member.user.createdTimestamp <= 1000 * 60 * 60 * 24 * 7) {
await inviterSchema.findOneAndUpdate({ guildID: member.guild.id, userID: invite.inviter.id }, { $inc: { total: 1, fake: 1 } }, { upsert: true });
const inviterData = await inviterSchema.findOne({ guildID: member.guild.id, userID: invite.inviter.id });
const total = inviterData ? inviterData.total : 0;
kayitchannel.wsend(`${star} ${member} Sunucumuza katıldı fakat hesabı 7 gün içerisinde açıldığı için şüpheli kısmına atıldı. ${red}`);
channel.wsend(`${member}, ${invite.inviter.tag} davetiyle katıldı! (**${total}**)`)
member.roles.set(ayar.fakeAccRole)
} else {
await inviterSchema.findOneAndUpdate({ guildID: member.guild.id, userID: invite.inviter.id }, { $inc: { total: 1, regular: 1 } }, { upsert: true });
const inviterData = await inviterSchema.findOne({ guildID: member.guild.id, userID: invite.inviter.id });
const total = inviterData ? inviterData.total : 0;
kayitchannel.wsend(`
${member.guild.name}'e Hoşgeldin ${member}! Hesabın ${memberGün} ${memberAylar} ${memberTarih} tarihinde oluşturulmuş. ${guvenilirlik ? `Şüpheli! ${red}` : `Güvenli! ${green}` }\n 
Sunucuya erişebilmek için "V. Confirmed" odalarında kayıt olup isim yaş belirtmen gerekmektedir.\n
Sunucu kurallarımız ${kurallar} kanalında belirtilmiştir. Unutma sunucu içerisinde ki ceza işlemlerin kuralları okuduğunu varsayarak gerçekleştirilecek.\n
Seninle beraber **${üyesayısı}** kişiyiz.${invite.inviter} tarafından davet edildin ve bu kişinin ${total} daveti oldu! :tada: :tada: :tada:`);
channel.wsend(`${member}, ${invite.inviter.tag} davetiyle katıldı! (**${total}**)`)
}
await coin.findOneAndUpdate({ guildID: member.guild.id, userID: invite.inviter.id }, { $inc: { coin: 1 } }, { upsert: true });
const gorevData = await gorev.findOne({ guildID: member.guild.id, userID: invite.inviter.id });
if (gorevData)
{
await gorev.findOneAndUpdate({ guildID: member.guild.id, userID: invite.inviter.id }, { $inc: { invite: 1 } }, { upsert: true });
}
};

module.exports.conf = {
  name: "guildMemberAdd",
};
