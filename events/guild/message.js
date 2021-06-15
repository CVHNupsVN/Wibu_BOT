const { Discord, MessageEmbed } = require("discord.js");
const { fs } = require('fs');
const { prefix } = require('../../config.js');

module.exports = async (bot, message) => {
  if (message.author.bot || message.channel.type === "dm" || !message.content.toLowerCase().startsWith(prefix)) return;
  if (message.content.startsWith(prefix) || message.content.startsWith(prefix.toLowerCase()) || message.content.startsWith(prefix.toUpperCase())) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
    if (commandfile) commandfile.run(bot, message, args);
  }
}
