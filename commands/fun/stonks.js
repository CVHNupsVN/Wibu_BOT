const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: 'stonks',
        aliases: ['stonkes']

    },
  run: async (client, message, args) => {
    
    const target = message.mentions.members.first()

    if (!target) return message.reply(`Bạn cần phải chọn người để tiếp tục !`)

    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setImage(encodeURI(`https://vacefron.nl/api/stonks?user=${target.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(embed);
  }
};
