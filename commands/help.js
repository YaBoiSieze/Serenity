const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Moderation", "addrole \n removerole \n clear \n prefix \n say \n warn \n warnlevel \n kick \n ban \n Jail \n report")
    .addField("Information", "botinfo \n serverinfo \n help")
    .addField("Misc", "level \n invite \n wyr \n qotd");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"help"
}
