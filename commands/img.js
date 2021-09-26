const {MessageEmbed} = require('discord.js')
module.exports.help = {
    name: "img",
    decreption: "img",
    aliases: ["image" , "google"]
}

module.exports.run = async function(client, message, args) {
        let baseurl = 'https://www.google.com/search?q='
    const dentifier = args.slice().join('+')
    const embed = new MessageEmbed()
    const url = `${baseurl}` + `${dentifier}`;
    embed.setTitle(`Google search results for ${args.slice().join(' ')}`)
    embed.setColor('RANDOM')
    embed.setDescription(`__[Click here to see your search results](${url})__`)
    embed.setTimestamp()
    embed.setFooter(`Requested by ${message.author.username}`)
    embed.setThumbnail('https://media.discordapp.net/attachments/805057216629571604/860897306898989056/google-1.png')
    message.channel.send(embed)
  
};
