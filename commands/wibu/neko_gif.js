const nekoslife = require('nekos.life');
const { MessageEmbed } = require('discord.js');
const neko = new nekoslife();

module.exports = {
    config: {
        name: 'nekov2',
        aliases: ["nekogif", "nekog"]
    },a
    run: async (bot, message, args, client) => {
      neko_gif = await neko.sfw.nekoGif();
      let embed = new MessageEmbed()
				.setAuthor(`Cẩn thận với đôi mắt của bạn đấy 🙈: `)
				.setColor('RANDOM')
				.setImage(neko_gif.url)
				.setFooter(`Yêu cầu bởi: `+ message.author.tag)
				.setTimestamp();
			message.channel.send(embed);
		}
}
