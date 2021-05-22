const { MessageEmbed } = require('discord.js');
const config_prefix = require ('../../config.js')

module.exports = {
    config: {
        name: 'help',
        aliases: ['commands', `help`, 'list']
    },
    run: async (bot, message, args, Discord, client) => {
        let prefix = config_prefix.prefix
        let help_1 = '```dance``` ```foxgirl``` ```neko``` ```nekog``` ```dance``` ```quote``` ```waifu``` ```wink```'
        
        let embed = new MessageEmbed()
            .setTitle(`Tất cả lệnh của bot:`)
            .setColor(`RANDOM`)
            .addField(`Prefix: `, prefix)
            .addField(`Kiểm tra độ trễ của bot: `, `ping`)
            .addField(`Kiểm tra thời gian trược tuyến: `, `uptime`)
            .addField(`Lệnh dành cho wibu: `, help_1)
        message.channel.send(embed);
    }
}
