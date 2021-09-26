const { MessageEmbed } = require("discord.js");

module.exports.help = {
      name: "allbots",
    decreption: "shows a list of all bots",
      aliases: ["ab"]
}
   module.exports.run = async function(client, message, args) {
    const botssize = message.guild.members.cache.filter(m=>m.user.bot).map(m=> `<@${m.id}> [ ${m.user.username} ]
    **ID :** \`${m.id}\``);
    const x = new MessageEmbed()
    .setColor('GREEN')
    .setDescription(`${botssize.join('\n \━\━\━\━\━\━\━\━\━\━\━\━\━\━\━\━\━\━\ \n')}`)
    .setFooter(`Total Bots : ${message.guild.members.cache.filter(member => member.user.bot).size}`)
    message.channel.send(x)
    if (x.length > 2000) {
      return message.channel.send(
        `I'm sorry but, my limit is 2000 characters only!`
      );
    } else {
      message.channel.send(x);
    }
  };