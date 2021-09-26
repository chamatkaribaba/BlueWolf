const { MessageEmbed } = require('discord.js')

module.exports.help = {
  name: "count",
  discription: "count",
  aliases: ["membercount"]
}

module.exports.run = async function(client, message, args) {
  const { memberCount } = message.guild;
  const bots = message.guild.members.cache.filter((mem) => mem.user.bot).size;
  const humans = message.guild.members.cache.filter((mem) => !mem.user.bot).size;

  const count = new MessageEmbed()
    .setTitle('Member count')
    .addField("Total members:", memberCount, true)
    .addField("Hoomans:", humans, true)
    .addField("Bots:", bots, true)
    .setColor('RANDOM')
    .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }))
    message.channel.send(count)
}