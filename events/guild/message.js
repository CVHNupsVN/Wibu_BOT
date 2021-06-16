const { Collection } = require("discord.js");
const { readdirSync } = require(`fs`);
const { prefix } = require('../../config.js');
const discordPrefix = require('discord-prefix');

module.exports = async (bot, message) => {

  let guildPrefix = discordPrefix.getPrefix(message.guild.id);
  if (!guildPrefix) guildPrefix = prefix;
  if (message.author.bot || message.channel.type === "dm" || !message.content.toLowerCase().startsWith(guildPrefix)) return;
  if (message.content.startsWith(guildPrefix) || message.content.startsWith(guildPrefix.toLowerCase()) || message.content.startsWith(guildPrefix.toUpperCase())) {
    const args = message.content.slice(guildPrefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
  
    let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
    if (commandfile) commandfile.run(bot, message, args);
  }
}
