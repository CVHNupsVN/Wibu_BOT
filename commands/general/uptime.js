const { MessageEmbed } = require('discord.js');
const prettyMilliseconds = require("pretty-ms");


module.exports = {
    config: {
        name: 'uptime',
        aliases: ["ut", "time"]
    },
    run: async (bot, message, args, client) => {
        let embed = new MessageEmbed()
            .setColor(`RANDOM`)
            .addField(`Thời gian trực tuyến:`, `${prettyMilliseconds(bot.uptime)}`)
        message.channel.send(embed);
    }
}
