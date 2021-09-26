  const { tictactoe } = require("reconlx");


module.exports.help = {
    name: "ttt",
    decreption: "tic tac toe",
    aliases: ["tictactoe" , "ttt"]
}

module.exports.run = async function(client, message, args) {
                 const opponent = message.mentions.users.first();
if (!opponent) return message.channel.send(`Please mention who you want to challenge at tictactoe.`);
const { TicTacToe } = require('weky')
const game = new TicTacToe({
    message: message,
    opponent: opponent,
    xColor: 'red',
    oColor: 'blurple', 
    xEmoji: '❌',  
    oEmoji: '0️⃣' ,
})
game.start()
}