const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");
module.exports = {
    config: {
        name: 'quote',
        aliases: ["caunoi"]
    },
    run: async (bot, message, args, client) => {
      fetch('https://animechan.vercel.app/api/random')
       .then(response => response.json())
       .then(quote => {
           let embed = new MessageEmbed()
           .setAuthor(`Được hỗ trợ bởi: https://animechan.vercel.app`)
           .setColor('RANDOM')
           .addField('Anime: ', quote.anime)
           .addField('Nhân vật: ', quote.character)
           .addField('Câu nói: ', quote.quote)
           //.setFooter('Yêu cầu bởi: ', `${message.author.tag}`)
           .setTimestamp()
           message.channel.send(embed)
       });
    }
}
