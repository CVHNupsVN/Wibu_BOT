const { Client, Collection, APIMessage } = require('discord.js');
const config = require('./config.js');
const constant= require('./node_modules/discord.js/src/util/Constants.js')
const client = new Client();

[`aliases`, `commands`].forEach(x => (client[x] = new Collection()));
['command', 'events'].forEach(x => require(`./handlers/${x}`)(client));

constant.DefaultOptions.ws.properties.$browser = `Discord Android` //F$CK IOS

client.on('ready', () => {
	client.user.setActivity('${config.prefix}help ❤', {
		type: 'LISTENING',
		url: 'https://www.youtube.com/watch?v=5qap5aO4i9A'
	});
});

client.login(config.token).catch(console.error);
