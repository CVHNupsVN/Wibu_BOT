const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");
module.exports = {
    config: {
        name: 'dance',
        aliases: ["nhay"]
    },
    run: async (bot, message, args, client) => {
      fetch('https://waifu.pics/api/sfw/dance')
       .then(response => response.json())
       .then(json_img => {
           let embed = new MessageEmbed()
           .setAuthor(`Cùng nhảy nào 😀 : `)
           .setImage(`${json_img.url}`)
           .setColor('RANDOM')
           .setFooter(`Yêu cầu bởi: ${message.author.tag}`)
           .setTimestamp()
           message.channel.send(embed)
       });
    } 
}
