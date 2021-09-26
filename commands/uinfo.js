const { MessageEmbed } = require('discord.js');

module.exports.help = {
    name: "userinfo",
    decreption: "userinfo",
    aliases: ["ui" , "whois"]
}

module.exports.run = async function(client, message, args) {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "online":
                status = "<:851044557742931988> Online";
                break;
            case "dnd":
                status = "<:DND:851044301994459146> dnd";
                break;
            case "Idle":
                status = "<:idle:851044422443073564> idle";
                break;
            case "offline":
                status = "<:Invisible:851044793961676820> offline";
                break;
        }

        const embed = new MessageEmbed()
            .setTitle(`${user.user.username} stats`)
            .setColor(`#f3f3f3`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "Name: ",
                    value: user.user.username,
                    inline: true
                },
                {
                    name: "#️⃣ Tag: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "🆔 ID: ",
                    value: user.user.id,
                },
                {
                    name: "Current Status: ",
                    value: status,
                    inline: true
                },
                {
                    name: "Activity: ",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `User isn't playing a game!`,
                    inline: true
                },
                {
                    name: 'Avatar link: ',
                    value: `[Click Here](${user.user.displayAvatarURL()})`
                },
                {
                    name: 'Creation Date: ',
                    value: user.user.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: 'Joined Date: ',
                    value: user.joinedAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: 'User Roles: ',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                    inline: true
                }
            )

        await message.channel.send(embed)
    }
