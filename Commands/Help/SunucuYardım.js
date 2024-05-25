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
    .setName("sunucu-yardım")
    .setDescription("Sunucu Komutlarını gösterir."),

  /**
   * @param {Client} client
   * @param {import("discord.js").Interaction} interaction
   */

  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setColor("Blue")
      .setTitle(`${config.botName}`)
      .setDescription("Sunucu Komutları...")
      .setFooter({
        iconURL: interaction.user.displayAvatarURL(),
        text: `Sorgulayan: ${interaction.user.username}`,
      })
      .setTimestamp()
      
      .addFields(
        {
          name: "**/kurucu-kim**",
          value: " ``Kurucuyu Gösterir.`` ",
          inline: false,
        },
        {
          name: "**/sa-as**",
          value: " ``Sa-As Açar/Kapatır.`` ",
          inline: false,
        },
        {
          name: "**/sunucu-bilgi**",
          value: " ``Sunucu Bilgilerini Gösterir.`` ",
          inline: false,
        }
      );
    interaction.reply({ embeds: [embed] });
  },
};
