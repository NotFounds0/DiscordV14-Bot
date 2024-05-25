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
    .setName("moderasyon-yardım")
    .setDescription("Moderasyon Komutlarını gösterir."),

  /**
   * @param {Client} client
   * @param {import("discord.js").Interaction} interaction
   */

  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setColor("Blue")
      .setTitle(`${config.botName}`)
      .setDescription("Moderasyon Komutları...")
      .setFooter({
        iconURL: interaction.user.displayAvatarURL(),
        text: `Sorgulayan: ${interaction.user.username}`,
      })
      .setTimestamp()
    
      .addFields(
        {
          name: "**/sil**",
          value: " ``Mesaj Silersin.`` ",
          inline: false,
        },
        {
          name: "**/oylama**",
          value: " ``Oyalama Yaparsın.`` ",
          inline: false,
        },
        {
          name: "**/unban**",
          value: " ``Ban Açarsın.`` ",
          inline: false,
        }
      );
    interaction.reply({ embeds: [embed] });
  },
};
