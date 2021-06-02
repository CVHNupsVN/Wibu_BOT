const discord = require("discord.js");
const client = require('nekos.life');
const neko = new client();

module.exports = {
    config: {
        name: 'hug',
        aliases: ['ôm']
    },

  run: async (client, message, args) => {
    
    let target = message.mentions.members.first()

    if (!target) return message.reply(`Bạn cần phải chọn người để ôm !`)

    let hug_img = await neko.sfw.hug();
    
    let embed = new discord.MessageEmbed()
    .setImage(hug_img.url)
    .setColor("RANDOM")
    .setAuthor(`${message.author.username} đã ôm ${target.user.username}`)
    .setTimestamp()
    
    message.channel.send(embed);
  }
};
