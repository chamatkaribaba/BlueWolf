const {MessageEmbed} = require('discord.js');
const {MessageButton} = require('discord-buttons')

module.exports.help = {
  name: "ticket",
  decreption: "ticket",
  aliases: []
}

module.exports.run = async function(client, message, args) {



let btn1 = new MessageButton()
    .setLabel('Open a ticket')
    .setStyle('green')
    .setEmoji("📩")
    .setID('1')
  message.channel.send(new MessageEmbed()
  .setTitle('BlueWolf tickets')
  .setDescription('Click the button below to open a new ticket!')
  .setColor("RANDOM"), btn1)
		
	
  client.on('clickButton', async (button) => {
    await button.reply.defer();
    if (button.id === "1") {
      let btn2 = new MessageButton()
        .setLabel('Close')
        .setStyle('red')
        .setEmoji("❌")
        .setID('2')
      button.guild.channels.create(`ticket-${button.clicker.user.username}`, {
        permissionOverwrites: [
          {
            id: button.guild.roles.everyone,
            deny: ['VIEW_CHANNEL'],
          },
          {
            id: button.clicker.user.id,
            allow: ['VIEW_CHANNEL'],
          },
        ],
      }).then(channel => {
        let supportmessage = new MessageEmbed()
          .setColor("#FF1493")
          .setTitle('BlueWolf tickets')
          .setDescription(`Welcome ${button.clicker.user.username} to your ticket!\nPlease wait for the support team to respond!\n\nReact below to close the ticket!`)
          .setTimestamp()
        channel.send(`<@${button.clicker.user.id}>`)
        channel.send({ embed: supportmessage, component: btn2 })
        let logs = button.guild.channels.cache.find(ch => ch.name == "ticket-logs")
        let logembed = new MessageEmbed()
          .setColor("RANDOM")
          .setTitle(`Action: Opened a ticket`)
          .setDescription(`Ticket <#${channel.id}> was opened by <@${button.clicker.user.id}> from <#${button.channel.id}>`)
          .setFooter('BlueWolf tickets')
          .setTimestamp()
        logs.send(logembed)

      })

    }
    if (button.id === "2") {
      button.channel.send("Channel will be deleted in 5 seconds")
      setTimeout(function() {
        button.channel.delete();
      }, 5000)
    let logs = button.guild.channels.cache.find(ch => ch.name == "ticket-logs")
      let closeembed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Action: Closed a ticket")
        .setDescription(`Ticket ${button.channel.name} was closed by <@${button.clicker.user.id}>`)
        .setFooter('BlueWolf tickets')
        .setTimestamp()
      logs.send(closeembed)
    }
  })

}