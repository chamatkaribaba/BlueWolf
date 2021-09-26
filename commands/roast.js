const roasts = require('../roasts.json');
const {MessageEmbed} = require ('discord.js')
module.exports.help = {
    name: "roast",
    decreption: "roast",
    aliases: []
}

module.exports.run = async function(client, message, args) {
 
 
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase());

        let roast = roasts.roast[Math.floor((Math.random() * roasts.roast.length))];

        if(!args[0]) {
            const sembed = new MessageEmbed()
                .setAuthor(message.guild.name, message.guild.iconURL())
                .setColor("GREEN")
                .setDescription("**Do You Really Want To Roast Yourself?**")
                .setFooter(message.member.displayName, message.author.displayAvatarURL())
                .setTimestamp()
            message.channel.send(sembed);
        }
        else if (args[0]) {
            const embed = new MessageEmbed()
                .setAuthor(message.guild.name, message.guild.iconURL())
                .setTitle(`${message.author.username}-`)
                .setColor("GREEN")
                .setDescription(`${roast}`)
                .setFooter(member.displayName, member.user.displayAvatarURL())
                .setTimestamp()
            message.channel.send(embed);
        }
    }