const Discord = require("discord.js");

module.exports.help = {
    name: "nuke",
    decreption: "nuke",
    aliases: []
}

module.exports.run = async function(client, message, args) {

  if (message.author.id !== '773031033850953748' &&
  !message.member.hasPermission('MANAGE_EMOJIS')){

    return message.channel.send('You do not have permissions to use this command').then(m => m.delete({ timeout: 5000 }))};
  if (!message.guild.me.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(":x: I don't have enough permission to do that in this server!");
    let channel = client.channels.cache.get(message.channel.id)
var posisi = channel.position;
  
  
  channel.clone().then((channel2) => {
    channel2.setPosition(posisi)
    channel.delete()
    channel2.send("Channel Has been nuked !",{
    files: ['https://media.tenor.com/images/0754697c9c4dd44ca8504dbf1b36b927/tenor.gif']
    })
  })
    }
