const Discord = require ('discord.js')

module.exports.help = {
    name: "drip",
    decreption: "drip",
    aliases: []
}

module.exports.run = async function(client, message, args){ 
        var author;
        if (!message.mentions.users.first()) author = message.author.avatarURL({format:"png"});
        else author = message.mentions.users.first().avatarURL({format:"png"});
        message.channel.send(`https://api.popcatdev.repl.co/drip?image=${author}`)
}
