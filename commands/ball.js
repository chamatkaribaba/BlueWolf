const Discord = require("discord.js")

module.exports.help = {
  name: '8ball',
  descreption: "the magical 8ball.....",
  aliases: ["8"],
  image: ""
}


module.exports.run = async function(client, message, args) {


    if(!args[0]) return message.channel.send("***```\nYou must ask a question to be able to use the 8ball command lol.\n```***")
    if(args[0].length < 1) return message.channel.send(":x: You must enter an ask")


    let i = ["Yes","No","Maybe","Maybe not" ,"my sources say no" , "my sources say yes" , "-_- no" , ";-;yes"]

    let y = i[Math.floor(i.length * Math.random())]


    message.channel.send(`:8ball: ${y}`)
}
