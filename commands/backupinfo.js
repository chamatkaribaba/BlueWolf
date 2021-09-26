const backup = require('discord-backup');
const{MessageEmbed} = require('discord.js')
module.exports.help = {
  name: 'backupinfo',
  descreption: "shows the info for a backup id",
  aliases: ["bi"]
  }


module.exports.run = async function(client, message,args) {
 let backupID = args[0];
        if(!backupID){
            return message.channel.send(":x: | You must specify a valid backup ID!");
        }
        
        backup.fetch(backupID).then((backupInfos) => {
            const date = new Date(backupInfos.data.createdTimestamp);
            const yyyy = date.getFullYear().toString(), mm = (date.getMonth()+1).toString(), dd = date.getDate().toString();
            const formatedDate = `${yyyy}/${(mm[1]?mm:"0"+mm[0])}/${(dd[1]?dd:"0"+dd[0])}`;
            let embed = new Discord.MessageEmbed()
                .setAuthor("Backup Informations")
                
                .addField("Backup ID", backupInfos.id, false)
                
                .addField("Server ID", backupInfos.data.guildID, false)
               
                .addField("Size", `${backupInfos.size} kb`, false)
          
                .addField("Created at", formatedDate, false)
                .setColor("#FF0000");
            message.channel.send(embed);
        }).catch((err) => {
            
            return message.channel.send(":x: | No backup found for `"+backupID+"`!");
        });
    }