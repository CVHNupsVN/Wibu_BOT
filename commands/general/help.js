const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: 'help',
        aliases: ['commands', `help`, 'list']
    },
    run: async (bot, message, args, Discord, client) => {
        if(message.author.bot) return message.channel.send("Hmm, Hình như bạn là BOT thì phải.")
        let info1 = `.yt`
        let info2 = '.clear'
        let info3 = '.ping'
        let info4 = `.info`
        let info5 = `.uptime`

        let embed = new MessageEmbed()
            .setTitle(`Tất cả lệnh của bot:`)
            .setColor(`RANDOM`)
            .addField(`Xem Youtube cùng nhau:`, info1, true)
            .addField(`Xóa tin nhắn:`, info2, true)
            .addField(`Kiểm tra độ trễ của bot:`, info3, true)
            .addField(`Thời gian trực tuyến:`,info5, true )
            .addField(`Thông tin về bot:`, info4, true)
        message.channel.send(embed);
    }
}
