const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setAuthor("Al sanaa🖕 \n")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setImage("https://media1.giphy.com/media/shVfiQI3nNd5e/giphy.gif")
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
  name: 'el-hareketi',
  description: 'Botun pingini gösterir.',
  usage: 'çılgınlık'
};
