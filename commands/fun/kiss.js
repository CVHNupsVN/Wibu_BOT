const { MessageEmbed } = require('discord.js');
const client = require('nekos.life');
const neko = new client();

module.exports = {
    config: {
        name: 'kiss',
        aliases: ['hôn']
    },
  run: async (client, message, args) => {
    
    let target = message.mentions.members.first()
    
    if (!target) return message.reply(`Bạn cần phải chọn người để hôn !`)

    let kiss_img = await neko.sfw.kiss();
    
    let embed = new MessageEmbed()
    .setImage(kiss_img.url)
    .setColor("RANDOM")
    .setAuthor(`${message.author.username} đã hôn ${target.user.username}`)
    .setTimestamp()
    message.channel.send(embed);
  }
};
