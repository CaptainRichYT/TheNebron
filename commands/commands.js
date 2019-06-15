const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
    let commandEmbed = new Discord.RichEmbed()
        .setDescription("OryxBot2.0 Commands are !kick, !ban, !hello, !commands, !botinfo, !serverinfo, !tempmute, !addrole, !removerole, !dog, !cat")
        .setColor("#4286f4")

        return message.channel.send(commandEmbed);
}

module.exports.help = {
    name: "commands"
}