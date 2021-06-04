const { MessageEmbed } = require('discord.js');
const config_prefix = require ('../../config.js')

module.exports = {
    config: {
        name: 'help',
        aliases: ['commands', `help`, 'list','trogiup']
    },
    run: async (bot, message, args, Discord, client) => {
        let prefix = config_prefix.prefix
        let help_1 = '`ping` `uptime`'
        let help_2 = ' `anime` `dance` `foxgirl` `neko` `quote` `waifu` `wink`'
        let help_3 = '`baka` `bite` `bonk` `bully` `handhold` `hug` `jail` `kill` `kiss` `lick` `pat` `paylak` `rip` `slap` `smile` `smug` `stonks`'
        let help_4 = '`boobs` `catgirl` `ero` `feet` `femdom` `hentai` `maid` `nekog` `pantsu` `trap` `yuri`'
        let activities = '`youtube` `pokernight`'
        
        let embed = new MessageEmbed()
            .setTitle(`Tất cả lệnh của bot:`)
            .setColor(`RANDOM`)
            .addField(`🔧 Prefix: `, prefix)
            .addField(`🔧 Lệnh chính: `, help_1)
            .addField(`🔧 Lệnh dành cho wibu: `, help_2)
            .addField(`😀 Fun:`, help_3)
            .addField(`🔞 NSFW:`,help_4)
            .addField(`🤖 Hoạt động: `, activities)
        message.channel.send(embed);
    }
}
