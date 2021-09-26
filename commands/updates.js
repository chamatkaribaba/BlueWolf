const {MessageEmbed} = require('discord.js')
module.exports.help = {
    name: "updates",
    decreption: "updates",
    aliases: ["updates"]
}

module.exports.run = async function(client, message, args) {

const update = new MessageEmbed()
.setTitle('Updates For BlueWolf **HELP COMMAND WILL BE UPDATED SOON**')
.setDescription('New Updates yay :D \n\n_ added notes systems and a rank card `=rankcard` or `=card` and a starboard system which work if a channel called "starboard" exists **Way to reach out to me**__`through dms at chamatkari baba#6969` , `through our website that can be found in the invite command or at (https://siddugaming07.wixsite.com/bluebot)` , `through the Bug,Feedback and suggest Command`')
//.addField(" **ADDED 5 NEW VC BASED GAMES** -`1: fishington 2: poker 3: yt togeher 4: chess 5: betrayal`")
.addField('Added Bio commands - `bs aka bio-set or bioset , bio-delete or biodelete , bio@<user> to check bio of auser `')
 .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
 .setThumbnail(message.author.avatarURL({ dynamic: true }))
 //.addField("added ar aka autoresponse can be set using =ar message and added anti inbivite and anti raid `=ai on and =ari on`")
.setTimestamp()
.setColor('RANDOM')
.setImage('https://cdn.discordapp.com/attachments/865177550921662466/865187181227278356/unknown.png')

message.channel.send(update)
}