const { MessageEmbed } = require('discord.js');
const prettyMilliseconds = require("pretty-ms");


module.exports = {
    config: {
        name: 'uptime',
        aliases: ["ut", "time"]
    },
    run: async (bot, message, args, client) => {
        let embed = new MessageEmbed()
            .setTitle(`Thời gian trực tuyến:`)
            .setColor(`RANDOM`)
      .addField(`Thời gian trực tuyến: ${prettyMilliseconds(bot.uptime)}\nĐộ trễ: ${Math.round(bot.ws.ping)}ms\n`)
        message.channel.send(embed);
    }
}
