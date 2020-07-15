const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./token.json'); //"[token]"

client.on('ready', () => {
	client.user.setPresence({activity: {type: 'WATCHING', name: 'bag! [victim]'}})
	console.log(client.user.username, 'ready');
});

var prefix = 'bag!'
var timeout

client.on('message', message => {
  if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;
  else {
		clearTimeout(timeout)
		message.guild.member(client.user).setNickname(message.content.slice(prefix.length));
		console.log(message.author.tag + ' : ' + message.content.slice(prefix.length));
		timeout = setTimeout(function () {
			message.guild.member(client.user).setNickname('')
			console.log('Automatically reset');
		}, 60000);
	}
})

client.login(token);
