const {MessageMenuOption , MessageMenu , MessageActionRow} = require("discord-buttons")
module.exports = {
  conf: {
    aliases: ["sm3","select-menu3"],
    name: "selectmenu3",
    help: "select-menu3",
    owner: true
  },
  
      run: async(client,message,args,embed) => {

        /* Select Menü  1. Rolleri*/
        const KutuRol1 = new MessageMenuOption()
        .setLabel('Sevgilim Var')
        .setDescription(`Sevgilim Var Rolünü Almak İçin Tıkla.`)
        .setEmoji("")
        .setValue('couple');
       
        const KutuRol12 = new MessageMenuOption()
        .setLabel('Sevgilim Yok')
        .setDescription(`Sevgilim Yok Rolünü Almak İçin Tıkla.`)
        .setEmoji("")
        .setValue('alone');

        const KutuRol13 = new MessageMenuOption()
        .setLabel('LGBT')
        .setDescription(`LGBT Rolünü Almak İçin Tıkla.`)
        .setEmoji("")
        .setValue('lgbt');

        const KutuRol14 = new MessageMenuOption()
        .setLabel('Rolsüz')
        .setDescription(`Rollerini Temizlemek İçin Tıkla.`)
        .setEmoji("🗑️")
        .setValue('rolsuz');
      

        /* Select Menü 1 Tanım*/
        const Menu = new MessageMenu()
        .setID("relation")
        .setPlaceholder("İlişki Rolleri")
        .addOption(KutuRol1)
        .addOption(KutuRol12)
        .addOption(KutuRol13)
        .addOption(KutuRol14)


        /* Select Menü 2. Rolleri */
        const KutuRol15 = new MessageMenuOption()
        .setLabel('VK')
        .setDescription(`Vampir Köylü Rolü Almak İçin Tıkla`)
        .setEmoji("")
        .setValue('vk');

        const KutuRol16 = new MessageMenuOption()
        .setLabel('SC')
        .setDescription(`Soru Cevap Rolü Almak İçin Tıkla.`)
        .setEmoji("")
        .setValue('sc');

        const KutuRol18 = new MessageMenuOption()
        .setLabel('Rolsüz')
        .setDescription(`Rollerini Temizlemek İçin Tıkla.`)
        .setEmoji("🗑️")
        .setValue('rolsuzz');

        /* Select Menü 2 Tanım */

        const Menu2 = new MessageMenu()
        .setID("oyun")
        .setPlaceholder(`Oyun Rolleri`)
        .addOption(KutuRol15)
        .addOption(KutuRol16)
        .addOption(KutuRol18)

        /* Select Menü 3 Rolleri */

        const KutuRol19 = new MessageMenuOption()
        .setLabel('Kırmızı')
        .setDescription(`Kırmızı Renk Rolü Almak İçin Tıkla.`)
        .setEmoji("")
        .setValue('kirmizi');

        const KutuRol20 = new MessageMenuOption()
        .setLabel('Sarı')
        .setDescription(`Sarı Renk Rolü Almak İçin Tıkla.`)
        .setEmoji("")
        .setValue('sari');

        const KutuRol21 = new MessageMenuOption()
        .setLabel('Mavi')
        .setDescription(`Mavi Renk Rolü Almak İçin Tıkla.`)
        .setEmoji("")
        .setValue('mavi');

        const KutuRol22 = new MessageMenuOption()
        .setLabel('Mor')
        .setDescription(`Mor Renk Rolü Almak İçin Tıkla.`)
        .setEmoji("")
        .setValue('mor');

        const KutuRol23 = new MessageMenuOption()
        .setLabel('Yeşil')
        .setDescription(`Yeşil Renk Rolü Almak İçin Tıkla.`)
        .setEmoji("")
        .setValue('yeşil');

        const KutuRol25 = new MessageMenuOption()
        .setLabel('Rolsüz')
        .setDescription(`Rollerini Temizlemek İçin Tıkla.`)
        .setEmoji("🗑️")
        .setValue('rolsuzzz');

        /* Select Menü 3 Tanım */

        const Menu3 = new MessageMenu()
        .setID("renk")
        .setPlaceholder(`Renk Rolleri`)
        .addOption(KutuRol19)
        .addOption(KutuRol20)
        .addOption(KutuRol21)
        .addOption(KutuRol22)
        .addOption(KutuRol23)
        .addOption(KutuRol25)

       /* Select Menü 4 Rolleri */

       const KutuRol26 = new MessageMenuOption()
       .setLabel('İkizler')
       .setDescription(`İkizler Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("")
       .setValue('ikizler');

       const KutuRol27 = new MessageMenuOption()
       .setLabel('Yengeç')
       .setDescription(`Yengeç Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("")
       .setValue('yengeç');

       const KutuRol28 = new MessageMenuOption()
       .setLabel('Boğa')
       .setDescription(`Boğa Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("")
       .setValue('boğa');

       const KutuRol29 = new MessageMenuOption()
       .setLabel('Koç')
       .setDescription(`Koç Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("")
       .setValue('koç');

       const KutuRol30 = new MessageMenuOption()
       .setLabel('Akrep')
       .setDescription(`Akrep Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("")
       .setValue('akrep');

       const KutuRol31 = new MessageMenuOption()
       .setLabel('Terazi')
       .setDescription(`Terazi Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("")
       .setValue('terazi');

       const KutuRol32 = new MessageMenuOption()
       .setLabel('Başak')
       .setDescription(`Başak Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("")
       .setValue('başak');

       const KutuRol33 = new MessageMenuOption()
       .setLabel('Aslan')
       .setDescription(`Aslan Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("")
       .setValue('aslan');

       const KutuRol34 = new MessageMenuOption()
       .setLabel('Balık')
       .setDescription(`Balık Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("")
       .setValue('balık');

       const KutuRol35 = new MessageMenuOption()
       .setLabel('Kova')
       .setDescription(`Kova Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("")
       .setValue('kova');

       const KutuRol36 = new MessageMenuOption()
       .setLabel('Oğlak')
       .setDescription(`Oğlak Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("")
       .setValue('oğlak');

       const KutuRol37 = new MessageMenuOption()
       .setLabel('Yay')
       .setDescription(`Yay Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("")
       .setValue('yay');

       /* Select Menü 4 Tanım */

       const Menu4 = new MessageMenu()
       .setID("burç")
       .setPlaceholder(`Burç Rolleri`)
       .addOption(KutuRol26)
       .addOption(KutuRol27)
       .addOption(KutuRol28)
       .addOption(KutuRol29)
       .addOption(KutuRol30)
       .addOption(KutuRol31)
       .addOption(KutuRol32)
       .addOption(KutuRol33)
       .addOption(KutuRol34)
       .addOption(KutuRol35)
       .addOption(KutuRol36)
       .addOption(KutuRol37)

        /* Select Menü 1 */
        const RoleMenu = new MessageActionRow()
        .addComponent(Menu)

        /* Select Menu 2 */
        const RoleMenu2 = new MessageActionRow()
        .addComponent(Menu2)

        /* Select Menu 3 */
        const RoleMenu3 = new MessageActionRow()
        .addComponent(Menu3)

         /* Select Menu 4 */
        const RoleMenu4 = new MessageActionRow()
        .addComponent(Menu4)

        message.channel.send(`Rol seçmek için aşağıdaki menüyü kullanabilirsiniz.`, {
          components: [
            RoleMenu,
            RoleMenu2,
            RoleMenu3,
            RoleMenu4],
        });
  }}