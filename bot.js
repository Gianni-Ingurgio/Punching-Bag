///////////// User variables here /////////////
var
prefix = '!bag',  //set prefix
reset = true,     //toggle auto reset
ms = 60000        //set delay in ms to reset
//////////// Proceed with caution /////////////

const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./token.json'); //"[token]"

client.on('ready', () => {
	client.user.setPresence({activity: {type: 'WATCHING', name: prefix + ' [victim]'}})
	console.log(client.user.username, 'watching', prefix);
	console.log('Set to autoreset after', ms/1000, 'seconds')
});

var timeout

client.on('message', message => {
  if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;
  else {
		if (reset) clearTimeout(timeout)
		message.guild.member(client.user).setNickname(message.content.slice(prefix.length));
		console.log(message.guild.name + ' : ' + message.author.tag + ' : ' + message.content.slice(prefix.length));
		if (reset) { timeout = setTimeout(function () {
				message.guild.member(client.user).setNickname('')
				console.log('Automatically reset after ' + ms / 1000 + ' seconds');
		}, ms)};
	}
})

client.login(token);
