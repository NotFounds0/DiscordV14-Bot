const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  Client,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");
const config = require("../../config.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Botun Pingini Gösterir."),

  /**
   * @param {Client} client
   * @param {import("discord.js").Interaction} interaction
   */

  async execute(interaction, client) {
    const ping = client.ws.ping;
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ping")
        .setLabel("Yenile")
        .setEmoji("🔃")
        .setStyle(ButtonStyle.Primary)
    );
    const embed = new EmbedBuilder()
      .setColor("Blue")
      .setTitle(`${config.botName} Ping`)
      .addFields({ name: "Ping", value: `${ping} ms`, inline: true })
      .setThumbnail(`${client.user.displayAvatarURL()}`)
      .setTimestamp();
    interaction.reply({ embeds: [embed], components: [row] });
  },
};
