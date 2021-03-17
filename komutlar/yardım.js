const db = require("quick.db");
const Discord = require('discord.js');
const baskan = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || baskan.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Logo Menüsü`, client.user.avatarURL)
.setColor('#0a0099')
.setDescription(``)  
.addField(`__Arrow__`,`<a:ok:769237900612468787>\`${prefix}arrow <yazı>\` : Arrow Logo Üretir.\ `,true)
.addField(`__Blue__`,`<a:ok:769237900612468787>\`${prefix}blue <yazı>\` : Blue Logo Üretir.\ `,true)
.addField(`__Booking__`,`<a:ok:769237900612468787>\`${prefix}booking <yazı>\` : Booking Logo Üretir.\ `,true)
.addField(`__Bubble__`,`<a:ok:769237900612468787>\`${prefix}bubble <yazı>\` : Bubble Logo Üretir.\ `,true)
.addField(`__Bubble 2__`,`<a:ok:769237900612468787>\`${prefix}bubble2 <yazı>\` : Bubble 2 Logo Üretir.\ `,true)
.addField(`__Bubble 3__`,`<a:ok:769237900612468787>\`${prefix}bubble3 <yazı>\` : Bubble 3 Logo Üretir.\ `,true)
.addField(`__Comic__`,`<a:ok:769237900612468787>\`${prefix}comic <yazı>\` : Comic Logo Üretir.\ `,true) 
.addField(`__Cool__`,`<a:ok:769237900612468787>\`${prefix}cool <yazı>\` : Cool Logo Üretir.\ `,true)
.addField(`__Discord__`,`<a:ok:769237900612468787>\`${prefix}discord <yazı>\` : Discord Logo Üretir.\ `,true)
.addField(`__Fire__`,`<a:ok:769237900612468787>\`${prefix}fire <yazı>\` : Fire Logo Üretir.\ `,true)
.addField(`__Gold__`,`<a:ok:769237900612468787>\`${prefix}gold <yazı>\` : Gold Logo Üretir.\ `,true)
.addField(`__Gold 2__`,`<a:ok:769237900612468787>\`${prefix}gold2 <yazı>\` : Gold 2 Logo Üretir.\ `,true)
.addField(`__Green__`,`<a:ok:769237900612468787>\`${prefix}green <yazı>\` : Green Logo Üretir.\ `,true)
.addField(`__Müzik__`,`<a:ok:769237900612468787>\`${prefix}müzik <yazı>\` : Müzik Logo Üretir.\ `,true) 
.addField(`__Skull__`,`<a:ok:769237900612468787>\`${prefix}skull <yazı>\` : Sull Logo Üretir.\ `,true) 
  .setImage('')
 message.channel.send(eklenti) 
  }
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["yardım","help"], 
    permLevel: 0
  };
  exports.help = {
    name: 'yardım'
  }; 