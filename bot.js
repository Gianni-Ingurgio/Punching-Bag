const
	Discord = require('discord.js'),
	client = new Discord.Client(),
	vars = require('./variables.json')

client.on('ready', () => {
	client.user.setPresence({activity: {type: 'WATCHING', name: vars.prefix + ' [victim]'}})
	console.log(client.user.username, 'watching', vars.prefix);
	console.log((vars.reset.toggle) ? 'Set to autoreset after ' + vars.reset.ms/1000 + ' seconds' : 'Autoreset disabled')
});

var timeout

client.on('message', message => {
  if (!message.content.toLowerCase().startsWith(vars.prefix) || message.author.bot) return;
  else {
		if (vars.reset.toggle) clearTimeout(timeout)
		message.guild.member(client.user).setNickname(message.content.slice(vars.prefix.length));
		console.log(message.guild.name + ' : ' + message.author.tag + ' : ' + message.content.slice(vars.prefix.length));
		if (vars.reset.toggle) { timeout = setTimeout(function () {
				message.guild.member(client.user).setNickname('')
				console.log('Automatically reset after ' + vars.reset.ms / 1000 + ' seconds');
		}, vars.reset.ms)};
	}
})

client.login(vars.token);
