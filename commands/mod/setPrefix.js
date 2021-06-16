const { MessageEmbed } = require('discord.js');
const config_prefix = require ('../../config.js')
const discordPrefix = require('discord-prefix');

module.exports = {
    config: {
        name: 'prefix',
        aliases: []
    },
    run: async (client, message, args) => {
      if(!message.member.hasPermission('MANAGE_GUILD')) return message.lineReply('Bạn không có quyền để sử dụng lệnh này !');
      let prefix = args[0].toLowerCase();
      if(!prefix) {
         return message.lineReply(`Vui lòng thêm kí tự để đặt làm prefix !`).then(msg => {
           setTimeout(() => msg.delete(), 10000)
        })
      } else if (args[0] == 'reset') {
        discordPrefix.setPrefix(config_prefix.prefix, message.guild.id);
        return message.lineReply(`Đặt lại prefix thành công !`).then(msg => {
           setTimeout(() => msg.delete(), 10000)
        })
      } else if(prefix.length > 3) {
        return message.lineReply(`Prefix không thể có trên 3 kí tự !`).then(msg => {
           setTimeout(() => msg.delete(), 10000)
        })
      }
     discordPrefix.setPrefix(prefix, message.guild.id);
     return message.lineReply(`Đã đổi prefix thành: \`${prefix}\` !\nĐể đặt lại prefix nhập \`${prefix}prefix reset\``)
    }
}
