module.exports.help = {
    name: "calculator",
    decreption: "opens a calculator on discord",
    aliases: ["calc"]
}

module.exports.run = async function(client, message, args) {
const {Calculator} = require('weky')

await Calculator({
    message: message,
    embed: {
        title: 'Calculator ',
        color: '#7289da',
        timestamp: true
    },
    disabledQuery: 'Calculator is disabled!',
    invalidQuery: 'The provided equation is invalid!',
    othersMessage: 'Only <@{{author}}> can use the buttons!'
});

}