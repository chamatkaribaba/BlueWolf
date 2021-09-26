const buttons = require ('discord-buttons')
const inlinereply = require('inlinereply')
module.exports.help = {
    name: "snake",
    decreption: "snake",
    aliases: ["snake"]
}

module.exports.run = async function(client, message, args) {

const { Snake } = require('weky');
await Snake({
	message: message,
	embed: {
		title: 'Snake',
		description: 'GG, you scored **{{score}}** points!',
		color: '#7289da',
		timestamp: true,
	},
	emojis: {
		empty: '⬛',
		snakeBody: '🟩',
		food: '🍎',
		up: '⬆️',
		right: '⬅️',
		down: '⬇️',
		left: '➡️',
	},
	othersMessage: 'Only <@{{author}}> can use the buttons!',
	buttonText: 'Cancel',
})
}