const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./token.json'); //just a file with the bot token

client.on('ready', () => {
	console.log(client.user.username, 'ready');
});

var prefix = 'bag!'

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  else (message.guild.member(client.user).setNickname(message.content.slice(prefix.length)));
})

client.login(token);
