const Discord = require('discord.js');
const bot = new Discord.Client();



const token = 'NTg4ODk0MDE4NTg3NTkwNjg4.XQLy4g.S1YlZCVH7h6_hSkZKqBPGA9nJ5E';

const PREFIX = '!';


bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity(' Over TheNebron!', { type: 'WATCHING'}).catch(console.error);
    bot.user.setStatus('dnd')

})




 bot.on('message', message=>{
    if(message.content === 'hello'){
      message.reply('Hello!');
    }
       
    let args = message.content.substring(PREFIX.length).split(" ");


    switch(args[0]){
        case 'ping':
           message.channel.sendMessage('Pong!')
           break;
        case 'channel':
            message.channel.sendMessage('https://www.youtube.com/channel/UCKXyWl7NsEgXJUzbbdsOoeg?view_as=subscriber')
            break;
        case 'support':
            message.channel.sendMessage('https://discord.gg/8gnkZxn Contact Captain_Rich#1366 for more help!')
            break;
        case 'help':
            const embed = new Discord.RichEmbed()
               .setTitle('**Commands**')
               .addField('!ping ', 'SAYS PONG OMG SOOOO COOL')
               .addField('!help ', 'Help = Help')
               .addField('!flipacoin ', 'Flips a coin!')
               .addField('!channel ', 'Link to my Youtube channel!')
               .addField('!info bot ', 'You will recieve all bot infomation.')
               .addField('!support ', 'You will recieve an invite to our support server!')
               .addField('**Moderator Commands** ', 'Need Certain Roles')
               .addField('!kick [player] ', 'Command used to kick a player.')
               .addField('!clear [args] ', 'Command used to clear a certain amount of messages...')
               .setColor(0x23DAF4)
               .setFooter('Join Our Support Server For Questions! (!support)')
               message.channel.sendEmbed(embed)
            break;
        case 'info':
            if(args[1] == 'bot'){
                const embed = new Discord.RichEmbed()
                .setTitle('Server Infomation')
                .addField('Current Server', message.guild.name)
                .addField('Version ', '1.1.0')
                .setColor(0x26DAF4)
                .setThumbnail(message.author.avatarURL)
                .setFooter('Created By Captain_Rich!')
                message.channel.sendEmbed(embed)
            break;
            }else{
                message.channel.sendMessage('Invalid Args')
            }
            break;
        case 'clear':
                if(!message.member.roles.find(r => r.name === "BotPermissions")) return message.channel.send('**YOU DONT HAVE PERMISSIONS.** :O')
            if(!args[1]) return message.reply('Error please define the second arg.')
            message.channel.bulkDelete(args[1]);
            message.channel.send('Finished!');
            break;
        case 'kick':
                if(!message.member.roles.find(r => r.name === "AdminPermissions")) return message.channel.send('**YOU DONT HAVE PERMISSIONS.** :O')

            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member.kick('You were kicked!').then(() =>{
                        message.reply(`Sucessfully kicked ${user.tag}`)
                    }).catch(err =>{
                        message.reply('I was unable to kick the member!');
                    });
                } else{
                    message.reply("That user isn\'t in this guild.")
                }
            } else {
                message.reply('You need to specify a person!')
            }

        break;
        
       case 'flipacoin':
{ 
      function doRandHT() {
            var rand = ['HEADS!','TAILS!'];

          return rand[Math.floor(Math.random()*rand.length)];
}

           const embed = {
            "title": `Here is the winner!`,
            "description": doRandHT(),
            "color": 7584788,
};
            message.channel.send({ embed });


};
        
    }
})

bot.login(token);
