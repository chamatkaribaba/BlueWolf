const db = require ('quick.db')
const discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");


module.exports.help = {
    name: "youtube",
    decreption: "youtube",
    aliases: ["yt"]
}

module.exports.run = async function(client, message, args) {
  const prefix = db.fetch(`prefix_guild_${message.guild.id}`) || "="
       
    

   let channel = message.member.voice.channel;
    if(!channel) return message.channel.send("You have to be in a vc")

    fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
        method: "POST",
        body: JSON.stringify({
            max_age: 86400,
            max_uses: 0,
            target_application_id: "755600276941176913",
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
        if(!invite.code) return message.channel.send("Sadly i cant start a yt together")
        const e = new discord.MessageEmbed()
        .setDescription(`[Click me](https://discord.com/invite/${invite.code})`)
        message.channel.send(e)
    })
}