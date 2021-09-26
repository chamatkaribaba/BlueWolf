const Nuggies = require('nuggies');
const Discord = require('discord.js');
const db = require("quick.db")


module.exports.help = {
    name: "buttonroles",
    decreption: "creates a button role",
    aliases: ["cbr" , "br"]
  }
  
  module.exports.run = async function(client, message, args) {

const prefix = await db.fetch(`prefix_${message.guild.id}`) || "="

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`You don't have enough powers to setup roles :(`)

  const channel = message.mentions.channels.first()
  if(!channel) return message.reply("Please mention a valid channel! \n `${prefix}buttonroles <channel> <embedcolor> <embeddescription>`")  

  let color = args[1];
  if(!args[1]) return message.channel.send("Please mention a valid color! \n `${prefix}buttonroles <channel> <embedcolor> <embeddescription>`")
  if(!args[1].startsWith("#") && args[0].content.length !== 7) return message.reply("Please mention a valid color! \n `${prefix}buttonroles <channel> <embedcolor> <embeddescription>`")
  const description = args.slice(2).join(" ")
  if(!description) return message.reply("Please give a description \n  `${prefix}buttonroles <channel> <embedcolor> <embeddescription>`")
	const brmanager = new Nuggies.buttonroles();
	await message.channel.send('Send messages in `roleID color label emoji` syntax! Once finished say `done`.');

	
	
	const filter = m => m.author.id === message.author.id;
	const collector = message.channel.createMessageCollector(filter, { max: Infinity });

	collector.on('collect', async (msg) => {
		if (!msg.content) return message.channel.send('Invalid syntax');
		if (msg.content.toLowerCase() == 'done') return collector.stop('DONE');
		const colors = ['grey', 'gray', 'red', 'blurple', 'green'];
		if (!msg.content.split(' ')[0].match(/[0-9]{18}/g) || !colors.includes(msg.content.split(' ')[1])) return message.channel.send('Invalid syntax');

		const role = msg.content.split(' ')[0];

		if (!role) return message.channel.send('Invalid role');

		const color = colors.find(color => color == msg.content.split(' ')[1]);
		if (!color) return message.channel.send('Invalid color');

		const label = msg.content.split(' ').slice(2, msg.content.split(' ').length - 1).join(' ');

		const reaction = (await msg.react(msg.content.split(' ').slice(msg.content.split(' ').length - 1).join(' ')).catch(/*() => null*/console.log));

		const final = {
			role, color, label, emoji: reaction ? reaction.emoji.id || reaction.emoji.name : null,
		};
		brmanager.addrole(final);
	})

	collector.on('end', async (msgs, reason) => {
		if (reason == 'DONE') {
			const embed = new Discord.MessageEmbed()
				.setTitle('Button roles!')
				.setDescription(description)
				.setColor(color)
				.setTimestamp();
			Nuggies.buttonroles.create({ message, content: embed, role: brmanager, channelID: message.channel.id })
		}
	})
};
