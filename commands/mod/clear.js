const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `clear`,
        aliases: [`purge`, `clear`]
    },
    run: async (bot, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('Bạn không có quyền để sử dụng lệnh này !');

        if (!message.member.guild.me.hasPermission('MANAGE_MESSAGES')) return message.reply(`Hình như mình không có quyền Manage Message thì phải.`);
        
         let clearamount = args[0];

        if(isNaN(clearamount)) return message.reply(`Vui lòng nhập số lượng tin nhắn cần xóa.`);

        if(clearamount >= 100) return message.reply('Không thể xóa trên 99 tin nhắn !');

        if(clearamount <= 0) return message.reply(`Không có tin nhắn nào được xóa.`)

        setTimeout(async () => {
            await message.channel.bulkDelete(clearamount);
            message.reply('Xóa thành công !').then(msg => msg.delete({timeout: 20000}));
        }, 1000)
    }
}
