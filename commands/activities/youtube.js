const { MessageEmbed } = require('discord.js');

module.exports.name = 'client';
module.exports = {
    config: {
        name: 'watch',
        aliases: ["youtube", "yt"]
    },
    run: async (bot, message, args, client, fetch) => {
        var fetch = require("../../node_modules/node-fetch");
        if (!message.member.voice.channel) return message.reply (`Vui lòng vào VC để sử dụng lệnh này!`)
        if (!message.member.voice.channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.channel.send("Lỗi, không tìm thấy quyền 'Tạo lời mời'.");
        fetch(`https://discord.com/api/v8/channels/${message.member.voice.channelID}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755600276941176913",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${process.env.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
              if (invite.error || !invite.code) return message.channel.send (`Không thể tạo lời mời. Vui lòng thử lại sau !`);
              message.channel.send(`Buổi xem youtube chung đặt tại kênh \`${message.member.voice.channel.name}\`. Vui lòng nhấp vào <https://discord.gg/${invite.code}> để tham gia`);
            })
            .catch(e => {
                message.reply(`Có lỗi xảy ra```${console.error}````)
            })
    }
}
