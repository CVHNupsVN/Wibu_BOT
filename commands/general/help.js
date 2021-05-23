const { MessageEmbed } = require('discord.js');
const config_prefix = require ('../../config.js')

module.exports = {
    config: {
        name: 'help',
        aliases: ['commands', `help`, 'list']
    },
    run: async (bot, message, args, Discord, client) => {
        let prefix = config_prefix.prefix
        let help_1 = '`foxgirl` `neko` `nekog` `hentai` `dance` `quote` `waifu` `wink`'
        let activities_1 = '`youtube` `pokernight`'
        
        let embed = new MessageEmbed()
            .setTitle(`Tất cả lệnh của bot:`)
            .setColor(`RANDOM`)
            .addField(`Prefix: `, prefix)
            .addField(`Kiểm tra độ trễ của bot: `, `ping`)
            .addField(`Kiểm tra thời gian trực tuyến: `, `uptime`)
            .addField(`Hoạt động: `, activities_1)
            .addField(`Lệnh dành cho wibu: `, help_1)
        message.channel.send(embed);
    }
}
