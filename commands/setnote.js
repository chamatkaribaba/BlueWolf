const Discord = require("discord.js")
const db = require("quick.db")
const moment = require("moment")
let random_string = require("randomstring")

module.exports.help = {
    name: "setnote",
    decreption: "setnote",
    aliases: ["sn"]
}

module.exports.run = async function(client, message, args) {
   let user;
   if(args[0] && isNaN(args[0])) user = message.mentions.users.first()
   if(args[0] && !isNaN(args[0])){
       user = client.users.cache.get(args[0])

       if(!message.guild.members.cache.has(args[0])) return message.reply(":x: User not found.")

   }

   
 module.exports.run = async function(client, message, args) {
   let user;
   if(args[0] && isNaN(args[0])) user = message.mentions.users.first()
   if(args[0] && !isNaN(args[0])){
       user = client.users.cache.get(args[0])

       if(!message.guild.members.cache.has(args[0])) return message.reply(":x: User not found.")

   }
   
   if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply(":x: You don't have the required permissions")

   if(!user) return message.channel.send(":x: You must enter userID")
 
   if(!user) return message.reply(":x: You must tag a user")

   let res = args.slice(1).join(" ")
   if(!res) return message.channel.reply(':x: You must provide something to be setted as a note')

   let warnID = await  
   random_string.generate({
     charset: 'numeric',
     length:8
   });
   

   //console.log(`${user.id} warned ID: ${warnID}`)

   message.channel.send(`The note has been set for ${user}`)
   db.push(`notes.${user.id}.${message.guild.id}`,{moderator:message.author.tag , reason:res , date:moment().format("YYYY-MM-DD"),id:warnID})
   db.add(`id.${user.id}.${message.guild.id}`,1)

}
}