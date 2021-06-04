const { MessageEmbed } = require('discord.js');
const crewmates = [
  'black',
  'blue',
  'brown',
  'cyan',
  'darkgreen',
  'lime',
  'orange',
  'pink',
  'purple',
  'red',
  'white',
  'yellow',
]
module.exports = {
    config: {
        name: 'ejected',
        aliases: []

    },
  run: async (client, message, args) => {
    
    const target = message.mentions.members.first()

    if (!target) return message.reply(`Bạn cần phải chọn người để tiếp tục !`)

    const crewmate = crewmates[Math.floor(Math.random() * crewmates.length)];

    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setImage(encodeURI(`https://vacefron.nl/api/ejected?name=${target.user.username}&impostor=BOOL&crewmate=${crewmate}`))
    .setTimestamp();

    return message.channel.send(embed);
  }
};
