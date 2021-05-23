const { MessageEmbed } = require('discord.js');
const nekoslife = require('nekos.life');
const neko = new nekoslife();

module.exports = {
	config: {
		name: 'trap',
		aliases: ['traps']
	},
	run: async (bot, message, args, Discord, client) => {
		if (message.channel.nsfw === true) {
			link = await neko.nsfw.trap();
			let embed = new MessageEmbed()
				.setAuthor(`Cẩn thận với đôi mắt của bạn đấy 🙈: `)
				.setColor('RANDOM')
				.setImage(link.url)
				.setFooter(`Yêu cầu bởi: `+ message.author.tag)
				.setTimestamp();
			message.channel.send(embed);
		} else {
			message.channel.send('Đây không phải kênh NSFW!');
		}
	}
};
