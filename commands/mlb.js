const db = require ('quick.db')

module.exports.help = {
    name: "messageleaderboard",
    decreption: "messageleaderboard",
    aliases: ["mlb"]
}

module.exports.run = async function(client, message, args , tools) {
  db.fetch (`GuildMessages_${message.guil}` , {sort: '.data'}).then(resp=>{
    resp.lentght = 15;
    let output = '**leaderboard**\n\n';
    for(var i in resp){
      output += (`${client.user.get(resp[i].id.split(_) [2]).username} -- ${resp[i].data} messages\n`);
          }
          message.channel.send(output)
      })
}