module.exports = {
  conf: {
    aliases: ["invitehelp", "invitey", "inviteh"],
    name: "inviteyardım",
    usage: "yardım [komut adı]",
    description: "Botta bulunan tüm komutları listeler."
  },

  run: async ({client, msg, args, embed, prefix, cfg}) => {
  let command = args[0]
	if (client.commands.has(command)) {
	command = client.commands.get(command)
	embed
	.addField('Komut Adı', command.conf.name, false)
	.addField('Komut Açıklaması', command.conf.description, false)
	.addField('Doğru Kullanım', command.conf.usage)
	.addField('Alternatifler', command.conf.aliases[0] ? command.conf.aliases.join(', ') : 'Bulunmuyor')
	.setColor('0x36393E')
	msg.channel.send(embed)
  return;}
  let yazı = "";
  client.commands.forEach(command => {
  yazı += `\`${prefix}${command.conf.usage}\` \n`;})
  msg.channel.send(embed.setDescription(yazı+`\n**NOT:** Botta çoklu prefix sistemi vardır bunlar: **${cfg.Bot.Prefix}**`).setFooter(`Detaylı bilgi: "${prefix}yardım {komut adı}"`));}}
