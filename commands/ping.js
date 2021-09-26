 const {MessageEmbed} = require('discord.js')
  const message = require('discord.js')
module.exports.help = {
    name: "ping",
    decreption: "Shows Bot Latency and Ping",
    aliases: ["pong"]
}

module.exports.run = async function(client, message, args) {
const gatewayLatency = Math.round(client.ws.ping);

	message.channel.send('🏓Pinging...').then(m => {
		const embed = new MessageEmbed()
			.setTitle('Pong!')
			.addField('API Latency', `\`${gatewayLatency}ms\``, true)
			.addField(
				'Client Latency',
				`\`${m.createdTimestamp - message.createdTimestamp}ms\``,
				true
			)
			.setColor('FFD494')
						.setTimestamp();
	message.channel.send(embed)
	});
};
