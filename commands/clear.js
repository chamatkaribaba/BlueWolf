module.exports.help = {
    name: "clear",
    decreption: "clears the number of messages in chat",
    aliases: ["purge"]
}

module.exports.run = async function(client, message, args) {
      const messageArray = message.content.split(' ');
	
     if (message.author.id !== '773031033850953748' &&
  !message.member.hasPermission('DELETE_MESSAGES')){

    return message.channel.send('You do not have permissions to use this command')

  }
    let deleteAmount;

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Please put a number only!') }

    if (parseInt(args[0]) > 100) {
        return message.reply('You can only delete 100 messages at a time!')
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount + 1, true);
    message.reply(`**Successfully** Deleted ***${deleteAmount}*** Messages.`).then(msg=>message.delete({timeout:"2000"}))

}