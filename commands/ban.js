const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!bUser) return message.channel.send("Coudn't Find User!");
        let bReason = args.slice(1).join(" ") || "None";
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You Don't Have Permission")
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("That Person Cannot Be Banned If You Have The Perms Do It Manually")

        let banEmbed = new Discord.RichEmbed()
        .setDescription("Ban")
        .setColor("##ff0000")
        .addField("Banned User", `${bUser} with ID ${bUser.id}`)
        .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Banned In", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", bReason)

        let banChannel = message.guild.channels.find(`name`, "kicked-and-banned") 
        if(!banChannel) return message.channel.send("Couldn't Find Kicked-and-Banned Channel")

        message.guild.member(bUser).ban(bReason)
        banChannel.send(banEmbed)

}

module.exports.help = {
    name: "ban"
}