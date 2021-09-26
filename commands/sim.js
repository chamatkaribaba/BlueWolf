

module.exports.help = {
    name: "jsim",
    decreption: "jsim",
    aliases: []
}

module.exports.run = async function(client, message, args) {
const add = await client.emit("guildMemberAdd", message.member);
    if (!add) {
      return message.channel.send("Failed")
    }
if(add) {
      return message.channel.send("ok")
    }
  }