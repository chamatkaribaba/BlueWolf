const {MessageEmbed} = require('discord.js')

module.exports.help = {
    name: "genralserversetup",
    decreption: "genralserversetup",
    aliases: ["gss"]
}

module.exports.run = async function(client, message, args) {
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`You don't have enough powers to ban someone`)

        message.guild.channels.create('Genral', {
            type: 'text',
        
            
        })
        message.guild.channels.create('Commands', {
            type: 'text',
        
            
        })
                message.guild.channels.create('Music', {
            type: 'voice',
        
            
        })

                message.guild.channels.create('Genral', {
            type: 'voice',
        
            
        })
                message.guild.channels.create('Rules', {
            type: 'text',
        
            
        })
                message.guild.channels.create('Information', {
            type: 'text',
        
            
        })

        const embed = new MessageEmbed()
            .setDescription('Created channels')
            .setColor('#00d0f0')
        message.channel.send(embed);
}