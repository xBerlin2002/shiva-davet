const cfg = require("../configs/config.json");
const { MessageEmbed } = require("discord.js");
const client = global.client;
const inviterData = require("../schemas/inviter");
const inviteMemberData = require("../schemas/inviteMember");
const moment = require("moment");

module.exports = async (msg) => {
  
  let prefix = cfg.Bot.Prefix.find((x) => msg.content.toLowerCase().startsWith(x));
  if (msg.author.bot || !msg.guild || !prefix) return;
  let args = msg.content.substring(prefix.length).trim().split(" ");
  let commandName = args[0].toLowerCase();
  const embed = new MessageEmbed().setColor("RANDOM").setAuthor(msg.author.tag, msg.author.avatarURL({ dynamic: true, size: 2048 }));
  args = args.splice(1);
  let cmd = client.commands.has(commandName) ? client.commands.get(commandName) : client.commands.get(client.aliases.get(commandName));
  let author = msg.guild.member(msg.author);
  let uye = msg.guild.member(msg.mentions.users.first()) || msg.guild.members.cache.get(args[0]);
  const guild = msg.guild.id
  if (cmd) {
    if (cmd.conf.owner && !cfg.Bot.Owners.includes(msg.author.id)) return;
    cmd.run({client: client, msg: msg, args: args, embed: embed, MessageEmbed: MessageEmbed, cfg: cfg, prefix: prefix, author: author, uye: uye, guild: guild, inviterData: inviterData, inviteMemberData: inviteMemberData, moment: moment});
  }
};

module.exports.conf = {
  name: "message",
};
