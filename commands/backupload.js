
const backup = require('discord-backup');
module.exports.help = {
  name: 'backupload',
  descreption: "loads the backup created onto a server",
  aliases: ["load"]
  }


module.exports.run = async function(client, message,args) {
      if(!message.member.hasPermission("ADMINISTRATOR")){
  return message.channel.send(":x: | You must be an administrator of this server to load a backup!");
}
let backupID = args[0];
if(!backupID){
  return message.channel.send(":x: | You must specify a valid backup ID!");
}

backup.fetch(backupID).then(async () => {

  message.channel.send(":warning: | When the backup is loaded, all the channels, roles, etc. will be replaced! Type `-confirm` to confirm!");
      await message.channel.awaitMessages(m => (m.author.id === message.author.id) && (m.content === "-confirm"), {
          max: 1,
          time: 20000,
          errors: ["time"]
      }).catch((err) => {
          
          return message.channel.send(":x: | Time's up! Cancelled backup loading!");
      });
     
      message.author.send(":white_check_mark: | Start loading the backup!");
      
      backup.load(backupID, message.guild).then(() => {
     
          backup.remove(backupID);
      }).catch((err) => {
          
          return message.author.send(":x: | Sorry, an error occurred... Please check that I have administrator permissions!");
      });
}).catch((err) => {
  console.log(err);
 
  return message.channel.send(":x: | No backup found for `"+backupID+"`!");
});
}
