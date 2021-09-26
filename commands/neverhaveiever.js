
module.exports.help = {
    name: "neverhaveiever",
    decreption: "neverhaveiever",
    aliases: ["nhie"]
}

module.exports.run = async function(client, message, args) {

const {NeverHaveIEver} = require('weky')
await NeverHaveIEver({
	message: message,
	embed: {
		title: 'Never Have I Ever',
		color: '#7289da',
		timestamp: true,
	},
	thinkMessage: 'I am thinking',
	othersMessage: 'Only <@{{author}}> can use the buttons!',
	buttons: { optionA: 'Yes', optionB: 'No' },
});
}