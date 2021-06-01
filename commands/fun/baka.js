const { MessageEmbed } = require('discord.js');
const client = require('nekos.life');
const neko = new client();

module.exports = {
    config: {
        name: 'baka',
        aliases: ['ngu', 'ngungoc']
    },
  run: async (client, message, args) => {
    
    let target = message.mentions.members.first()
    
    if (!target) return message.reply(`Bạn cần phải chọn người để nói họ là đồ baka!`)

    let kiss_img = await neko.sfw.baka();
    
    let embed = new MessageEmbed()
    .setImage(kiss_img.url)
    .setColor("RANDOM")
    .setAuthor(`${target.user.username} là đồ bakaaa !`)
    .setTimestamp()
    message.channel.send(embed);
  }
};
