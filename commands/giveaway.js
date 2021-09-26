const ms = require ("ms")
const discord = require ("discord.js")
module.exports.help = {
    name: "giveaways",
    decreption: "giveaways",
    aliases: ["gaw"]
}

module.exports.run = async function(client, message, args) {

    var rolename;
  var BonusEntries;
 
  if (
    !message.member.hasPermission("MANAGE_MESSAGES") &&
    !message.member.roles.cache.some(r => r.name === "Giveaways")
  ) {
    return message.channel.send(
      ":x: You need to have the manage messages permissions to start giveaways."
    );
  }

 
  let giveawayChannel = message.mentions.channels.first();
 
  if (!giveawayChannel) {
    return message.channel.send(":x: You have to mention a valid channel!");
  }

 
  let giveawayDuration = args[1];
  
  if (!giveawayDuration || isNaN(ms(giveawayDuration))) {
    return message.channel.send(":x: You have to specify a valid duration!");
  }


  let giveawayNumberWinners = parseInt(args[2]);
 
  if (isNaN(giveawayNumberWinners) || parseInt(giveawayNumberWinners) <= 0) {
    return message.channel.send(
      ":x: You have to specify a valid number of winners!"
    );
  }


  let giveawayPrize = args.slice(3).join(" ");
 
  if (!giveawayPrize) {
    return message.channel.send(":x: You have to specify a valid prize!");
  }

  message.channel.send("Do You Want Any Bonus Enteries?");
  const filter = m => m.author.id === message.author.id;
  await message.channel
    .awaitMessages(filter, {
      max: 1,
      time: 300000,
      errors: ["time"]
    })
    .then(async collected => {
      if (collected.first().content.toLowerCase() === "yes") {
        await message.channel.send(
          `Alright which role will have bonus enteries?`
        );
        await message.channel
          .awaitMessages(filter, {
            max: 1,
            time: 60000,
            errors: ["time"]
          })
          .then(async rolen => {
            const x = await message.guild.roles.cache.find(
              n => n.name === `${rolen.first().content}`
            );
            rolename = rolen.first().content;
            if (!x) {
              message.channel.send(`No such role found!, Skipping this!`);
              rolename = null;
            }
          });
        if (rolename !== null) {
          await message.channel.send(
            `How many bonus eneteries will we have for ${rolename}?`
          );
          await message.channel
            .awaitMessages(filter, {
              max: 1,
              time: 60000,
              errors: ["time"]
            })
            .then(async rolentery => {
              BonusEntries = parseInt(rolentery.first().content);
              message.channel.send(
                `✅ Alright **${rolename}** will have **${BonusEntries}** Extra Enteries`
              );
            });
        }
      } else {
        if (collected.first().content.toLowerCase() === "no") {
          message.channel.send("Aight! Skipping this!");
          rolename = null;
          BonusEntries = null;
        } else {
          message.channel.send("Invalid Response Collected, Skipping!");
          rolename = null;
          BonusEntries = null;
        }
      }
    });

  
  await client.giveawaysManager.start(giveawayChannel, {
    
    time: ms(giveawayDuration),
  
    prize: giveawayPrize,
    
    winnerCount: parseInt(giveawayNumberWinners),
    

    bonusEntries: [
      {
        
        bonus: new Function(
          "member",
          `return member.roles.cache.some((r) => r.name === \'${rolename}\') ? ${BonusEntries} : null`
        ),
        cumulative: false
      }
    ],
 
   
    messages: {
      giveaway:
        (client.config.everyoneMention ? "@everyone\n\n" : "") +
        "🎉🎉 **GIVEAWAY** 🎉🎉",
      giveawayEnded:
        (client.config.everyoneMention ? "@everyone\n\n" : "") +
        "🎉🎉 **GIVEAWAY ENDED** 🎉🎉",
      timeRemaining: "Time remaining: **{duration}**!",
      inviteToParticipate: `React with 🎉 to participate!`,
      winMessage: "Congratulations, {winners}! You won **{prize}**!",
      embedFooter: "Giveaways",
      noWinner: "Giveaway cancelled, no valid participations.",
      hostedBy: "Hosted by: {user}",
      winners: "winner(s)",
      endedAt: "Ended at",
      units: {
        seconds: "seconds",
        minutes: "minutes",
        hours: "hours",
        days: "days",
        pluralS: false 
      }
    }
  });
  if (rolename) {
    const mentionfetch = await message.guild.roles.cache.find(
      n => n.name === `${rolename}`
    );
    let giveaway = new Discord.MessageEmbed()
      .setAuthor(`Bonus Enteries Alert!`)
      .setDescription(
        `**${mentionfetch}** Has **${BonusEntries}** Extra Enteries in this giveaway!`
      );
    giveawayChannel.send(giveaway);
  }
  message.channel.send(`Giveaway started in ${giveawayChannel}!`);
};