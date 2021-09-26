const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const Beautify = require('beautify');


module.exports.help = {
  name: 'eval',
  descreption: "Eval something",
  aliases: []
  }

module.exports.run = async function(client, message,args) {

		let owners = [
			'773031033850953748',
			'787125350978814022',
      '514699064210882562',
      '855322629321785354',
      '713083932723249244'
		];
		if (!owners.includes(message.author.id))
			return message.channel.send("You don't have permission!");

		if (!args[0]) {
			message.channel.send('You need to evaluate something Please');
		}

		try {
			if (
				args
					.join(' ')
					.toLowerCase()
					.includes('token')
			) {
				return;
			}

			const toEval = args.join(' ');
			const evaluated = eval(toEval);

			let embed = new Discord.MessageEmbed()
				.setTitle('Eval')
				
				.addField('Evaluated', `\`\`\`js\n${evaluated}\`\`\``)
				.setTimestamp()
				.setColor("RANDOM")
				.setFooter("Blue Bot © 2021")
			message.channel.send(embed);
		} catch (e) {
			let errorembed = new Discord.MessageEmbed()
				.addField(':x: Error!')
				.setDescription(e)
				.setTimestamp()
				.setFooter(`${message.author.tag}`, client.user.displayAvatarURL());
			message.channel.send(errorembed);
		}
	}

