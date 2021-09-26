module.exports.help = {
    name: "unlockdown",
    decreption: "unlock",
    aliases: ["unlock"]
}

module.exports.run = async function(client, message, args) {
    if (!client.lockit) client.lockit = [];
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('Bro you not have permission')

    message.channel.createOverwrite(message.guild.id, {
SEND_MESSAGES: true
    }).then(() => {
      message.channel.send('Lockdown Lifted !')
      delete client.lockit[message.channel.id]
    }).catch( (error) => {
      console.log(error)
    })
}