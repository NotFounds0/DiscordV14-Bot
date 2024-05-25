const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
  EmbedBuilder,
} = require("discord.js");
const logs = require("discord-logs");
require("dotenv").config();
const db = require("croxydb");

const { loadEvents } = require("./Handlers/eventHandler.js");
const { loadCommads } = require("./Handlers/commandHandler.js");

const client = new Client({
  intents: [Object.keys(GatewayIntentBits)],
  partials: [Object.keys(Partials)],
});

logs(client, {
  debug: true,
});

/**
 * @param {import('discord.js').Interaction} interaction
 */

client.commands = new Collection();

client.on("messageCreate", (interaction) => {
  var saText = [
    "Aleykümselam, Hoşgeldin Gardaşım",
    "Aleykümselam hoşgeldin",
    "ooo reis aleykümselam hoşgeldin",
  ];
  var textCikti = saText[(Math.random() * saText.length) | 0];
  let saas = db.fetch(`saas_${interaction.guild.id}`);
  if (!saas) return;
  if (saas) {
    let sa = interaction.content.toLowerCase();
    if (
      sa == "sa" ||
      sa == "sea" ||
      sa == "selam" ||
      sa == "slm" ||
      sa == "selamlar" ||
      sa == "selamün aleyküm" ||
      sa == "Sa" ||
      sa == "Selam" ||
      sa == "Selamlar" ||
      sa == "Selamün Aleyküm" ||
      sa == "Sea"
    ) {
      interaction.reply(`<@${interaction.author.id}> ${textCikti}`);
    }
  }
});

client.on("messageCreate", async (interaction) => {
  if (await db.get(`afk_${interaction.author.id}`)) {
    db.delete(`afk_${interaction.author.id}`);

    const Embed1 = new EmbedBuilder()
      .setColor("Green")
      .setDescription(`Artık Afk Değil Aramıza Geri Döndü.`);

    interaction.reply({ embeds: [Embed1] });
  }
});

client.login(process.env.TOKEN).then(() => {
  loadEvents(client);
  loadCommads(client);
});
