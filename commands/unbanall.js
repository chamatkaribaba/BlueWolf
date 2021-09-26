module.exports.help = {
    name: "unbanall",
    decreption: "unbanall",
    aliases: []
}

module.exports.run = async function(client, message, args) {    
    
    
    message.guild.fetchBans().then(bans => {
    if(!bans) return message.channel.send('No members banned!')
    bans.forEach(b => {
        message.guild.members.unban(b.user);
    });
    message.channel.send(`Unbanned **${bans.size > 1 ? 'users' : 'user'}**.`);
    })
   }