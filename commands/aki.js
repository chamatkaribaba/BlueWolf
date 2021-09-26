const { Client, MessageEmbed  } = require("discord.js"),
      {          Aki          } = require("aki-api"),
      emojis = ["👍🏻", "👎🏻", "❔", "🤔", "🙄", "✖"],
      Started = new Set();

new Client({messageCacheMaxSize: 50})
module.exports.help = {
      name: "akinator",
    decreption: "starts a game of akinator",
      aliases: ["aki"]
}
   module.exports.run = async function(client, message, args) {
 
      if (message.author.bot || !message.guild) return;
if(!Started.has(message.author.id))Started.add(message.author.id);
else return message.channel.send(new MessageEmbed().setDescription("The game has already started please wait..."));
      const aki = new Aki("en"); 
            await aki.start();
const msg = await message.channel.send(new MessageEmbed()
                                       .setTitle(`${message.author.username}, Question ${aki.currentStep + 1}`)
                                       .setColor("RANDOM")
                                       .setDescription(`${aki.question}\n\n${aki.answers.map((x, i) => `${x} | ${emojis[i]}`).join("\n")}`));
for(let emoji of emojis){
      try {
            await msg.react(emoji);
      }catch(e){
            console.error(e);
      }}
const collector = msg.createReactionCollector((reaction, user) => emojis.includes(reaction.emoji.name) && user.id === message.author.id,{ time: 60000 * 6 });
      collector.on("collect", async (reaction, user) => {
      reaction.users.remove(user).catch(console.error);
if(reaction.emoji.name == ":x:")return collector.stop();

await aki.step(emojis.indexOf(reaction.emoji.name));
if (aki.progress >= 70 || aki.currentStep >= 78) {
          await aki.win();
          collector.stop();
          message.channel.send(new MessageEmbed()
              .setTitle("**Is this your character?**")
              .setDescription(`${aki.answers[0].name} \n  ${aki.answers[0].description} \nRanking as : #${aki.answers[0].ranking}\n\nyes (Y) / no (N)`)
              .setImage(aki.answers[0].absolute_picture_path)
              .setColor("RANDOM"));
message.channel.awaitMessages(
response => ["yes","y","no","n"].includes(response.content.trim().toLowerCase()) &&
response.author.id == message.author.id, { max: 1, time: 30000, errors: ["time"] })
        .then(collected => {
           const content = collected.first().content.trim().toLowerCase();
              if (content == "y" || content == "yes")
                   return message.channel.send(new MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle("Great! Guessed right one more time!")
                    .setDescription("I love playing with you!"));
              else 
                  return message.channel.send(new MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle("Uh oh. You win!")
                    .setDescription("I love playing with you!"));
            });
          return;
        }
        const embed  = new MessageEmbed()
                  .setTitle(`${message.author.username}, Question ${aki.currentStep + 1}`)
                  .setColor("RANDOM")
                  .setDescription(`${aki.question}\n\n${aki.answers.map((x, i) => `${x} | ${emojis[i]}`).join("\n")}`)

         msg.edit({ embed: embed })
   })
   collector.on("end",()=>{ Started.delete(message.author.id);
                         msg.delete({ timeout: 1000 }).catch(()=>{});
                      });   
       }
    