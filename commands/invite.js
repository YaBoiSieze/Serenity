const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  //this is where the actual code for the command goes
  return message.channel.send('https://discordapp.com/oauth2/authorize?client_id=522228781662863370&scope=bot&permissions=2146958847');
}
//name this whatever the command name is.
module.exports.help = {
  name: "invite"
}
