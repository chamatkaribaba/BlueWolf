

module.exports.help = {
    name: "lsim",
    decreption: "lsim",
    aliases: []
}

module.exports.run = async function(client, message, args) {
const add = await client.emit("guildMemberRemove", message.member);
    if (!add) {
      return message.channel.send("Failed")
    }
if(add) {
      return message.channel.send("ok")
    }
  }