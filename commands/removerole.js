const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You Don't Have Permission");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't Find User!");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't Find That Role.");

  if(!rMember.roles.has(gRole.id)) return message.reply("They Don't Have That Role.");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`RIP, You Lost The ${gRole.name} Role.`)
    message.channel.send(`<@${rMember.id}> Has Lost The Role ${gRole.name}.`)
  }catch(e){
    message.channel.send(`RIP To <@${rMember.id}>, We Removed ${gRole.name} From Them. We Tried To DM Them, But Their DMs Are Locked.`)
  }
}

module.exports.help = {
  name: "removerole"
}
