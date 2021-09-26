const db = require('quick.db')
const { MessageEmbed } = require('discord.js')

module.exports.help = {
      name: "ar",
    decreption: "sets your auto response",
      aliases: ["autoresponse"]
}
   module.exports.run = async function(client, message, args) {
 
        const content = args.join(" ")
        if(!args)return message.channel.send("pls put something a ar pls")
        await db.set(`ar-${message.author.id}+${message.guild.id}`, content)
        const embed = new MessageEmbed()
        .setDescription(`ar added as ${content}`)
        .setColor("GREEN")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
        
   message.channel.send(embed) 
                      
    }