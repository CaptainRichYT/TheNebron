const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send("Couldn't Find User!");
        let kReason = args.slice(1).join(" ") || "None";
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You Don't Have Permission")
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That Person Cannot Be Kicked If You Have The Perms Do It Manually")

        let kickEmbed = new Discord.RichEmbed()
        .setDescription("Kick")
        .setColor("#e56b00")
        .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
        .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Kicked In", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", kReason)

        let kickChannel = message.guild.channels.find(`name`, "kicked-and-banned") 
        if(!kickChannel) return message.channel.send("Couldn't Find Kicked-and-Banned Channel")

        message.guild.member(kUser).kick(kReason)
        kickChannel.send(kickEmbed)
}

module.exports.help = {
    name: "kick"
}