const { MessageEmbed } = require('discord.js');
const client = require('nekos.life');
const neko = new client();

module.exports = {
    config: {
        name: 'pat',
        aliases: ['vuotve']
    },
  run: async (client, message, args) => {
    
    let target = message.mentions.members.first()
    
    if (!target) return message.reply(`Bạn cần phải chọn người để vuốt ve!`)

    let pat_img = await neko.sfw.pat();
    
    let embed = new MessageEmbed()
    .setImage(pat_img.url)
    .setColor("RANDOM")
    .setAuthor(`${message.author.username} đã vuốt ve ${target.user.username}`)
    .setTimestamp()
    message.channel.send(embed);
  }
};
