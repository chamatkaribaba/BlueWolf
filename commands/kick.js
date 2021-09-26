const Discord = require('discord.js')
const db = require ("quick.db")

module.exports.help = {
  name: 'kick',
  descreption: "kicks a member",
  aliases:[]
}

 const {MessageEmbed} = require('discord.js')
module.exports.run = async function(client, message,args) {
        try {
            if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**You Do Not Have Permissions To Kick Members! - [KICK_MEMBERS]**");
            if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("**I Do Not Have Permissions To Kick Members! - [KICK_MEMBERS]**");

            if (!args[0]) return message.channel.send('**Enter A User To Kick!**')

            var kickMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            if (!kickMember) return message.channel.send("**User Is Not In The Guild!**");

            if (kickMember.id === message.member.id) return message.channel.send("**You Cannot Kick Yourself!**")

            if (!kickMember.kickable) return message.channel.send("**Cannot Kick This User!**")
            if (kickMember.user.bot) return message.channel.send("**Cannot Kick A Bot!**")

            var reason = args.slice(1).join(" ");
            try {
                const sembed2 = new MessageEmbed()
                    .setColor("RED")
                    .setDescription(`**Hello, You Have Been Kicked From ${message.guild.name} for - ${reason || "No Reason!"}**`)
                    .setFooter(message.guild.name, message.guild.iconURL())
                kickMember.send(sembed2).then(() =>
                    kickMember.kick()).catch(() => null)
            } catch {
                kickMember.kick()
            }
            if (reason) {
            var sembed = new MessageEmbed()
                .setColor("GREEN")
                .setAuthor(message.guild.name, message.guild.iconURL())
                .setDescription(`**${kickMember.user.username}** has been kicked for ${reason}`)
            message.channel.send(sembed);
            } else {
                var sembed2 = new MessageEmbed()
                .setColor("GREEN")
                .setAuthor(message.guild.name, message.guild.iconURL())
                .setDescription(`**${kickMember.user.username}** has been kicked`)
            message.channel.send(sembed2);
            }
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (!channel) return;

            const embed = new MessageEmbed()
            .setColor("RED")
            .setFooter(message.guild.name, message.guild.iconURL())
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
            .addField("**User kicked**", `${message.mentions.users.first().username}`)
            .addField("**Moderator**", `<@${message.author.id}>`)
            .addField("**Reason**", `${reason}`)
            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(embed)


        } catch (e) {
            return message.channel.send(`**${e.message}**`)
        }
    }