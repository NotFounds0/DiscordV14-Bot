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
    .setName("yardım")
    .setDescription("Bot Komutlarını gösterir."),

  /**
   * @param {Client} client
   * @param {import("discord.js").Interaction} interaction
   */

  async execute(interaction, client) {
    const actionRow = new ActionRowBuilder().addComponents([
      new ButtonBuilder()
        .setLabel("Davet Et")
        .setURL(config.botDavet)
        .setStyle(ButtonStyle.Link),
      new ButtonBuilder()
        .setLabel("Web Site")
        .setURL(config.botWeb)
        .setStyle(ButtonStyle.Link),
      new ButtonBuilder()
        .setLabel("Destek Sunucusu")
        .setURL(config.botDestekSunucu)
        .setStyle(ButtonStyle.Link),
    ]);

    const embed = new EmbedBuilder()
      .setColor("Blue")
      .setTitle(`${config.botName}`)
      .setDescription("Yardım Komutları...")
      .setFooter({
        iconURL: interaction.user.displayAvatarURL(),
        text: `Sorgulayan: ${interaction.user.username}`,
      })
      .setTimestamp()
      
      .addFields(
        {
          name: "**/bot-yardım**",
          value: " ``Bot Komutları Gösterir.`` ",
          inline: false,
        },
        {
          name: "**/kullanıcı-yardım**",
          value: " ``Kullanıcı Komutları Gösterir.`` ",
          inline: false,
        },
        {
          name: "**/moderasyon-yardım**",
          value: " ``Moderasyon Komutları Gösterir.`` ",
          inline: false,
        },
        {
          name: "**/sunucu-yardım**",
          value: " ``Sunucu Komutları Gösterir.``",
          inline: false,
        }
      );

    interaction.reply({ embeds: [embed], components: [actionRow] });
  },
};
