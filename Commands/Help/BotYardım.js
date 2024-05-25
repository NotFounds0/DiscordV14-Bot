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
    .setName("bot-yardım")
    .setDescription("Bot Komutlarını gösterir."),

  /**
   * @param {Client} client
   * @param {import("discord.js").Interaction} interaction
   */

  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setColor("Blue")
      .setTitle(`${config.botName}`)
      .setDescription("Bot Komutları...")
      .setFooter({
        iconURL: interaction.user.displayAvatarURL(),
        text: `Sorgulayan: ${interaction.user.username}`,
      })
      .setTimestamp()
      .addFields(
        {
          name: "**/yardım**",
          value: " ``Komutları Gösterir.`` ",
          inline: false,
        },
        {
          name: "**/bot-bilgi**",
          value: " ``Botun İstatistiğini Gösterir.`` ",
          inline: false,
        },
        {
          name: "**/invite**",
          value: " ``Davet linkleri Atar.`` ",
          inline: false,
        },
        {
          name: "**/ping**",
          value: " ``Botun Pingini Gösterir.`` ",
          inline: false,
        }
      );
    interaction.reply({ embeds: [embed] });
  },
};
