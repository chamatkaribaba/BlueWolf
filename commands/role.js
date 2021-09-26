const { MessageEmbed } = require('discord.js');
const _ = require('lodash');

module.exports.help = {
    name: "roles",
    decreption: "roles",
    aliases: ["listroles"]
}

module.exports.run = async function(client, message, args) { message.channel.send(
    new MessageEmbed()
    .setTitle('Roles')
    .setColor('RANDOM')
    .addFields(_.chunk(message.guild.roles.cache.array()
        .filter(x => x.id !== message.guild.id)
        .sort((A,B) => B.rawPosition - A.rawPosition), 10)
        .map(x => {
          return {name: '\u200b', inline: true,
            value: '\u200b' + x.map(x => `\u2000•\u2000${x}`).join('\n')
          };
        })
    )
  )
};