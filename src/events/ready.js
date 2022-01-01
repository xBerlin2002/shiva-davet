const client = global.client;
const cfg = require("../configs/config.json");

module.exports = async () => {
  
  const invites = await client.guilds.cache.get(cfg.Server.GuildID).fetchInvites();
  client.invites.set(cfg.Server.GuildID, invites);
  console.log(`Sunucu davetleri tanımlandı!`)
  
  client.user.setPresence({ activity: { name: cfg.Bot.Durum }, status: cfg.Bot.Status });
  let VoiceChannelID = client.channels.cache.get(cfg.Channels.Voice);
  if (VoiceChannelID) VoiceChannelID.join().catch({});
  console.log(`(${client.user.username}) adlı hesapta [${client.guilds.cache.get(cfg.Server.GuildID).name}] adlı sunucuda giriş yapıldı. ✔`)}

module.exports.conf = {
  name: "ready",
};
