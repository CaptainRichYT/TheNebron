const Discord = require('discord.js');
const bot = new Discord.Client();


const token = 'NTg4ODk0MDE4NTg3NTkwNjg4.XQLy4g.S1YlZCVH7h6_hSkZKqBPGA9nJ5E';

const PREFIX = '!';

const version = '1.2.1';

const creater = 'Created By Captain_Rich!'

bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setAactivity(' Over TheNebron!', { type: 'WATCHING'}).catch(console.error);
    bot.user.setStatus('dnd')

})


 bot.on('message', message=>{
    if(message.content === 'hello'){
      message.reply('Hello!')
    }

    const args = message.content.substring(PREFIX.length).split(" ");


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
               .addField('!dice help ', 'YOU NEED TO READ THIS')
               .addField('!coinflip ', 'Flips a coin!')
               .addField('!channel ', 'Link to my Youtube channel!')
               .addField('!info bot ', 'You will recieve all bot infomation.')
               .addField('!server info ', 'You will recieve all server infomation.')
               .addField('!support ', 'You will recieve an invite to our support server!')
               .addField('**Moderator Commands** ', 'Need Certain Roles')
               .addField('!kick [player] ', 'Command used to kick a player.')
               .addField('!clear [args] ', 'Command used to clear a certain amount of messages...')
               .addField('**Games!** ', 'WOOO!')
               .addField('!dicegame ', 'Objective is to get exacly 100!')
               .setColor(0x29AF4)
               .setFooter('Join Our Support Server For Questions! (!support)')
               message.channel.sendEmbed(embed)
            break;
        case 'info':
            if(args[1] == 'bot'){
                const embed = new Discord.RichEmbed()
                .setTitle('Bot Infomation')
                .addField('Creater ', 'Captain_Rich#1366')
                .addField('Version ', version)
                .addField('Prefix ', 'You may use any letter, or symbol as your prefix. (Ex: @help)')
                .setColor(0x26DAF4)
                .setThumbnail(message.author.avatarURL)
                .setFooter('Created By Captain_Rich!')
                message.channel.sendEmbed(embed)
            break;
            }
          case 'dice':
            if(args[1] == 'help'){
                const embed = new Discord.RichEmbed()
                .setTitle('Game Infomation')
                .addField('Rules ', 'Just roll the dice ;-; (!dicegame = roll) and uh try to get 100 :wink:')
                .addField('*PS* ', '*YOU CANT WIN :P*')
                .setColor(0x59DAF4)
                .setFooter('Created By Captain_Rich!')
                message.channel.sendEmbed(embed)
            break;
            }
        case 'server':
            if(args[1] == 'info'){
                const embed = new Discord.RichEmbed()
                .setTitle('Server Infomation')
                .addField('Current Server', message.guild.name)
                .addField('Server Size ', message.guild.memberCount)
                .setColor(0x26DAF4)
                .setThumbnail(message.author.avatarURL)
                .setFooter(creater)
                message.channel.sendEmbed(embed)
            break;
            }
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
    
      case '!dicegame':
      var roll = (Math.floor(Math.random()*200)+1);
      message.channel.send('This roll is: ' + roll);
      if (roll <=100){message.reply('Thats not enough, keep rolling')} 
      else{message.reply('Uuuuuh thots over 100 :P twy tu got ezacly 100 pwease okay? *DO !DICE HELP U REALLY NEED IT')} 
        
        break;
        
       case '!coinflip':
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
