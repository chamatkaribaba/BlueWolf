  

const db = require('quick.db')
const { MessageEmbed } = require('discord.js')

module.exports.help = {
      name: "afk",
    decreption: "sets your afk",
      aliases: []
}
   module.exports.run = async function(client, message, args) {
 
        const content = args.join(" ")
        await db.set(`afk-${message.author.id}+${message.guild.id}`, content)
        const embed = new MessageEmbed()
        .setDescription(`You have been set to afk\n**Reason :** ${content}`)
        .setColor("GREEN")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
      //  message.member.setNickname("[AFK] " + message.author.username).catch(err => {});
   message.channel.send(embed) 
                      
    }