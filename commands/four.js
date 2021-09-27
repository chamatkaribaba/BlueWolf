module.exports.help = {
    name: "connect4",
    decreption: "starts a connect4 ga,e",
    aliases: ["4" , "four"]
}

module.exports.run = async function(client, message, args) {



        const nidhish = require('nidhishpackage')
        const ConnectFour = new nidhish.connectfour()
        ConnectFour.startGame(message)
}