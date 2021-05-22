const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: 'help',
        aliases: ['commands', `help`, 'list']
    },
    run: async (bot, message, args, Discord, client) => {
        let prefix = '.'
        let info_1 = 'ping'
        let info_2 = '```dance``` ```foxgirl``` ```neko``` ```nekog``` ```dance``` ```quote``` ```waifu``` ```wink```'
        
        let embed = new MessageEmbed()
            .setTitle(`Tất cả lệnh của bot:`)
            .setColor(`RANDOM`)
            .addField(`Prefix: `, prefix)
            .addField(`Kiểm tra độ trễ của bot: `, info_1)
            .addField(`Dành cho wibu: `, info_2)
        message.channel.send(embed);
    }
}
