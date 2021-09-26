const db = require('quick.db')
module.exports = async (client, message) => {

  if (!message.guild || message.author.bot) return;



  if (db.has(`afk-${message.author.id}+${message.guild.id}`)) {
    const info = db.get(`afk-${message.author.id}+${message.guild.id}`)
    await db.delete(`afk-${message.author.id}+${message.guild.id}`)
  //  message.member.setNickname(message.author.Nickname).catch(err => { });
    message.channel.send(`Your afk status is removed (${info})`)
  }

  if (message.mentions.members.first()) {
    if (db.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)) {
      message.channel.send(message.mentions.members.first().user.tag + " is afk :" + db.get(`afk-${message.mentions.members.first().id}+${message.guild.id}`))
    } else;
  

  } else;
  let CustomPrefix = await db.get(`prefix_${message.guild.id}`);
  if (!CustomPrefix) CustomPrefix = `=`;


  if (message.author.bot || !message.guild || message.webhookID) return;

  if (!message.content.startsWith(CustomPrefix)) return;

  let args = message.content.slice(CustomPrefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();

  let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));

  if (command) {
command.run(client, message, args);
  };
};


