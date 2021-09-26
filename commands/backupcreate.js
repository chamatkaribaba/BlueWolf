const backup = require('discord-backup');
module.exports.help = {
  name: 'backupcreate',
  descreption: "creates a backup for your server",
  aliases: ["cb"]
  }


module.exports.run = async function(client, message,args) {
      if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send(':x: You need to have the manage messages permissions to create a backup in this server.');
    }

    backup.create(message.guild).then((backupData) => {

        return message.channel.send('Backup created! Here is your ID: `'+backupData.id+'` Use `backupload '+backupData.id+'` to load the backup on another server!');

    }).catch(() => {

        return message.channel.send(':x: An error occurred, please report to the Support server ');

    });

}