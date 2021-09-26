const discord = require('discord.js');

module.exports.help = {
    name: "cticket",
    decreption: "cticket",
    aliases: []
}

module.exports.run = async function(client, message, args) {

    if(!message.content.startsWith(prefix)) return;

   
    const categoryID = message.member.guild.channels.cache.find(c => c.name == "TICKETS")
    
 
    if(!categoryID) return;

 
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return;

   
    if(message.channel.parentID == categoryID){
    
        
        message.channel.delete();
    
 
    } else {
        return;
    }
}