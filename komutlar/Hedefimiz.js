const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setAuthor("Hedefimiz 20 Sunucu Kullanıcı 1,000 Kişi \n")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setImage("")
  .setFooter("©️ 2018 | Go BOT", "https://cdn.discordapp.com/attachments/458547389930668033/458598385440653312/G.png")
  /*
   * Takes a Date object, defaults to current date.
   */

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hedef',
  description: 'hedef.',
  usage: 'hedef'
};
