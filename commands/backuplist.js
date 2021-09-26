module.exports.help = {
  name: 'backuplist',
  descreption: "backuplist",
  aliases: ["bl"]
  }


module.exports.run = async function(client, message,args) {

		let owners = [
			'773031033850953748',
			'787125350978814022',
      '514699064210882562',
      '855322629321785354',
      '713083932723249244'
		];
		if (!owners.includes(message.author.id))
			return message.channel.send("You don't have permission! it's a owner only command");

const backup = require("discord-backup");
backup.list().then((backups) => {
    message.channel.send(backups); 
})
}