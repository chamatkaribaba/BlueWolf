module.exports.help = {
    name: "battle",
    decreption: "batle a user",
    aliases: ["bat"]
}

module.exports.run = async function(client, message, args) {
const minigames = require('discord-minigames')

let member = message.mentions.members.first()

minigames.startBattle(member, message)

}