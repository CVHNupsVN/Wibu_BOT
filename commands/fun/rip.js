const Discord = require("discord.js");

module.exports = {
    config: {
        name: 'rip',
        aliases: ['F']
    },
  run: async (client, message, args) => {
    
   const target = message.mentions.members.first()

   if (!target) return message.reply(`Bạn cần phải chọn người để tiếp tục`)

    const Embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("Press F to pay respect")
    .setImage(encodeURI
    (`https://api.devs-hub.xyz/rip?image=${target.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
