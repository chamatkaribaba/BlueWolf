const db =require('quick.db')
module.exports.help = {
    name: "dxp",
    decreption: "dxp",
    aliases: ["disablelevels"]
}

module.exports.run = async function(client, message, args) {

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**You Do Not Have The Required Permissions! - [ADMINISTRATOR]**")

        try {
            let a  = await db.fetch(`guildMessages_${message.guild.id}`)

            if (!a) {
                return message.channel.send("**XP Messages Are Already Disabled In The Server!**")
            } else {
                db.delete(`guildMessages_${message.guild.id}`)

                message.channel.send("**XP Messages Are Disabled Successfully!**")
            }
            return;
        } catch (e){
            console.log(e)
            return message.channel.send('somethin went wrong')
        }
    }




