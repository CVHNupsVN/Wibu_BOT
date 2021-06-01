const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    config: {
        name: 'bonk',
        aliases: []
    },
    run: async (bot, message, args, client) => {
      let target = message.mentions.members.first()

      if (!target) return message.reply(`Bạn cần phải chọn người để bonk!`)


      fetch('https://waifu.pics/api/sfw/bonk')
       .then(response => response.json())
       .then(json_img => {
           let embed = new MessageEmbed()
           .setAuthor(`${message.author.username} đã bonk ${target.user.username} !`)
           .setImage(`${json_img.url}`)
           .setColor('RANDOM')
           .setTimestamp()
           message.channel.send(embed)
       });
    } 
}
