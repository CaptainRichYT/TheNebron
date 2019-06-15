const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You Don't Have Permission");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't Find User!.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't Find That Role.");

  if(rMember.roles.has(gRole.id)) return message.reply("They Already Have That Role.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Congrats, You Have Been Given The Role ${gRole.name}`)
    message.channel.send(`<@${rMember.id}> Has Been Given The Role ${gRole.name}.`)
  }catch(e){
    message.channel.send(`Congrats To <@${rMember.id}>, They Have Been Given The Role ${gRole.name}. We Tried To DM Them, But Their DMs Are Locked.`)
  }
}

module.exports.help = {
  name: "addrole"
}