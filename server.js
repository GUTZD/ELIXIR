const Discord = require("discord.js");
const client = new Discord.Client;
const prefix = "!" //this is the last prefix 

client.on("message", message => {
if(message.content == "ping") {
  message.reply("pong");
}
});
