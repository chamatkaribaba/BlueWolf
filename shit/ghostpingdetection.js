const client = require('../index.js')
const discord = require('discord.js')
const { MessageEmbed , Discord } = require('discord.js')
const pings = new Discord.Collection()


module.exports = async (client, message) => {
  const mentionedmember = message.mentions.first()
  if (!mentionedmember) return;
  if (!mentionedmember.id === message.author.id) return;
  const timeout = 6000;
  pings.set(`pinged: ${mentionedmember.id}`, Date.now() + timeout)

  setTimeout(() => {
    pings.delete(`pinged: ${mentionedmember.id}`);
   timeout
  });


client.on("messageDelete", (message) => {
  const mentionedmember = message.mentions.first()
  if (!mentionedmember) return;
  if (!mentionedmember.id === message.author.id) return;

  const GhostPingLogsChannel = message.channel;
  if (pings.has(`pinged:${mentionedmember.id}`)) {
    const GhostPingEmbed = new MessageEmbed()
      .setTitle('GHOST PING DETECTED')
      .addField('Author', message.author)
      .addField('Content', message.content)
      .setTimestamp()
      .setFooter(client.user.username, client.user.displayAvatarURL())
      .setcolor("red")

    GhostPingLogsChannel.send(GhostPingEmbed)
  }

})
}

