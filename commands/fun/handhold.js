const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    config: {
        name: 'handhold',
        aliases: ["namtay"]
    },
    run: async (bot, message, args, client) => {
      let target = message.mentions.members.first()

      if (!target) return message.reply(`Bạn cần phải chọn người để nắm tay!`)

      fetch('https://waifu.pics/api/sfw/handhold')
       .then(response => response.json())
       .then(json_img => {
           let embed = new MessageEmbed()
           .setAuthor(`${message.author.username} đã nắm tay của ${target.user.username} !`)
           .setImage(`${json_img.url}`)
           .setColor('RANDOM')
           .setTimestamp()
           message.channel.send(embed)
       });
    } 
}
