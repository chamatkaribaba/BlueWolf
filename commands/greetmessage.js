const db = require('quick.db');

module.exports.help = {
    name: "greetmessage",
    decreption: "greetmessage",
    aliases: ["sgm" , "gm"]
}

module.exports.run = async function(client, message, args) {
  let msg = args.join(" ")
db.set(`greetmsg_${message.guild.id}`, msg)
return message.channel.send(`I have set greet message as \`\`\`${msg}\`\`\`.\n\nPreview: \n${msg.replace("%user%", message.author.toString())}`)
}