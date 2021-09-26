const {  MessageButton ,MessageActionRow} = require("discord-buttons");
const fetch = require("node-fetch");
const discord = require('discord.js');
const {MessageEmbed} = require('discord.js')

module.exports.help = {
  name: 'fishton',
  descreption: "fishton",
  aliases: ["fish","ft"]
  }


module.exports.run = async function(client, message,args) {
   let channel = message.member.voice.channel;
    if(!channel) return message.channel.send("You have to be in a vc")

    fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
        method: "POST",
        body: JSON.stringify({
            max_age: 86400,
            max_uses: 0,
            target_application_id: "814288819477020702",
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
        if(!invite.code) return message.channel.send("Sadly i cant start a fishton mtch")
        const e = new discord.MessageEmbed()
        .setDescription(`[Click me](https://discord.com/invite/${invite.code})`)
        message.channel.send(e)
    })
}