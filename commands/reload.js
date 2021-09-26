const fs = require("fs");
const Discord = require("discord.js");
module.exports.help = {
  name: "reload",
  decreption: "reload",
  aliases: []
}

module.exports.run = async function(client, message, args) {
  if (message.author.id === '773031033850953748') {
    const client = message.client
    if (!args[0]) return message.channel.send("please insert a command name");
    const commandName = args[0].toLowerCase();
    fs.readdirSync(`./commands`).forEach(f => {
      const files = fs.readdirSync(`./commands`);
      if (files.includes(`${commandName}.js`)) {
        const file = `${process.cwd()}/commands/${commandName}.js`;
        try {
          delete require.cache[require.resolve(file)];
          client.commands.delete(commandName);
          const pull = require(file);
          client.commands.set(commandName, pull);
        } catch (err) {
          console.log(err.stack || err);
          return message.channel.send("Could not reload!");

        }
      }
    })
    message.channel.send("Successfully reloaded!", `Command: \`${commandName}.js\``)
  }
};