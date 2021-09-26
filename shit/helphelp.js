/*const {MessageEmbed} = require("discord.js")


module.exports.help = {
    name: "help",
    decreption: "help",
    aliases: []
}

module.exports.run = async function(client, message, args) {



const query = args[0].toLowerCase();

const command =
  client.commands.get(query) || client.commands.get(client.aliases.get(query));

if (!command) return message.channel.send("Command not found sadge");

const embed = new MessageEmbed()
  .setTitle(`${command.help.name}`)
  .setDescription(
    `Name: ${command.help.name}\nDescription: ${
      command.help.description
    }\nAliases: ${command.help.aliases || "No aliases"}`
  )
  .setColor("RANDOM")
  
message.channel.send(embed);
}*/