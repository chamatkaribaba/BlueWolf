
module.exports.help = {
    name: "WouldYouRather",
    decreption: "WouldYouRather",
    aliases: ["wyr"]
}

module.exports.run = async function(client, message, args) {


	const { WouldYouRather } = require('weky')
	await WouldYouRather(message)
}