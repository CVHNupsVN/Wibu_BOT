const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: 'ping',
        aliases: ["ms", "ws"]
    },
    run: async (bot, message, args, client) => {
        if(message.author.bot) return message.channel.send("Hmm, Hình như bạn là BOT thì phải.")
        message.channel.send(`🏓Độ trễ: ${Math.round(bot.ws.ping)}ms`);
    }
}
