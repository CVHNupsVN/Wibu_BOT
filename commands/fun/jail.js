const Discord = require("discord.js");

module.exports = {
    config: {
        name: 'jail',
        aliases: ['tù', 'ditu']
    },
  run: async (client, message, args) => {
    
   const target = message.mentions.members.first()

   if (!target) return message.reply(`Bạn cần phải chọn người để tiếp tục`)

    const Embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("Ai rồi cũng phải đi tù thôi ...")
    .setImage(encodeURI
    (`https://api.devs-hub.xyz/jail?image=${target.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
