const {MessageEmbed} = require("discord.js")

module.exports.help = {
    name: "credits",
    decreption: "credits",
    aliases: ["devs"],

}

module.exports.run = async function(client, message, args) {

const embed = new MessageEmbed()
.setTitle("Credits For BlueWolf")
.setDescription(`:diamond_shape_with_a_dot_inside: chamatkari baba#6969 Owner/full time dev \n\n :diamond_shape_with_a_dot_inside: o_o#6666" gaws and music based on his code \n\n :diamond_shape_with_a_dot_inside: lukaas#0666 \n\n :diamond_shape_with_a_dot_inside: some help form nishant,nightfury,iminhati `)

message.channel.send(embed)

}

