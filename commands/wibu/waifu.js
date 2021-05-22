const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");
module.exports = {
    config: {
        name: 'waifu',
        aliases: ["wf"]
    },
    run: async (bot, message, args, client) => {
      fetch('https://waifu.pics/api/sfw/waifu')
       .then(response => response.json())
       .then(json_img => {
           let embed = new MessageEmbed()
           .setAuthor(`Cẩn thận với mắt của bạn đấy 🙈: `)
           .setImage(`${json_img.url}`)
           .setColor('RANDOM')
           .setFooter(`Yêu cầu bởi: ${message.author.tag}`)
           .setTimestamp()
           message.channel.send(embed)
       });
    }
}
