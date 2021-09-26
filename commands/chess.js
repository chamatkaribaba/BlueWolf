const {  MessageButton ,MessageActionRow} = require("discord-buttons");
const fetch = require("node-fetch");
const discord = require('discord.js');
const {MessageEmbed} = require('discord.js')

module.exports.help = {
  name: 'chess',
  descreption: "starts a game of chess in a vc",
  aliases: []
  }


module.exports.run = async function(client, message,args) {
   let channel = message.member.voice.channel;
    if(!channel) return message.channel.send("You have to be in a vc")

    fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
        method: "POST",
        body: JSON.stringify({
            max_age: 86400,
            max_uses: 0,
            target_application_id: "832012586023256104",
            target_type: 2,
            temporary: false,
            validate: null
        }),
        headers: {
            "Authorization": `Bot ${client.token}`,
            "Content-Type": "application/json"
        }
    })
    
    .then(res => res.json())
    .then(invite => {
        if(!invite.code) return message.channel.send("Sadly i cant start a chess mtch")
        const e = new discord.MessageEmbed()
        .setDescription('Hope you enjoy your chess match')
        .setColor('RANDOM')
        //message.channel.send(e)
        const website = new MessageButton()
    .setStyle("url")
    .setLabel("Click to join")
    .setURL(`https://discord.com/invite/${invite.code}`)

    message.channel.send("Hello", {
        buttons: [website],
        embed: e
    })
     
    })
}