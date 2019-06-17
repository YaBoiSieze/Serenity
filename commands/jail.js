const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

 if (message.member.hasPermission('MANAGE_ROLES')) {
    let jMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])); 
    if (!jMember) return message.reply("That user does not exist.");
    let jRole = message.guild.roles.find(r => r.name.toLowerCase() === "jailed")

    jMember.removeRoles(jMember.roles)
    
    jMember.addRole(jRole.id); 


    message.channel.send("User was put in jail.");  

    try {
      await jMember.send("You have been jailed."); 
    } catch (e) {
      message.channel.send("We tried to DM the user to let them know, but their DM's are locked."); 
    }


  } else {
    message.channel.send("You do not have permission to use this command.");
  }

}

module.exports.help = {
  name:"jail"
}
