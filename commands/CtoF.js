const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let number = message.guild.member(message)
    return message.channel.send(number * 9/5) 
}
module.exports.help = {
  name: "ctof"
}