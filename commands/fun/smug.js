const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    config: {
        name: 'smile',
        aliases: ["cười"]
    },
    run: async (bot, message, args, client) => {
      let target = message.mentions.members.first()

      if (!target) return message.reply(`Bạn cần phải chọn người để cười!`)

      fetch('https://waifu.pics/api/sfw/smile')
       .then(response => response.json())
       .then(json_img => {
           let embed = new MessageEmbed()
           .setAuthor(`${message.author.username} đã cười trước ${target.user.username} !`)
           .setImage(`${json_img.url}`)
           .setColor('RANDOM')
           .setTimestamp()
           message.channel.send(embed)
       });
    } 
}
