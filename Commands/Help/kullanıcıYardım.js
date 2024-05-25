const {
  SlashCommandBuilder,
  Client,
  EmbedBuilder,
} = require("discord.js");
const config = require("../../config.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kullanıcı-yardım")
    .setDescription("Kullanıcı Komutlarını gösterir."),

  /**
   * @param {Client} client
   * @param {import("discord.js").Interaction} interaction
   */

  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setColor("Blue")
      .setTitle(`${config.botName}`)
      .setDescription("Kullanıcı Komutları...")
      .setFooter({
        iconURL: interaction.user.displayAvatarURL(),
        text: `Sorgulayan: ${interaction.user.username}`,
      })
      .setTimestamp()
      
      .addFields(
        {
          name: "**/afk**",
          value: " ``Afk Kalırsın.`` ",
          inline: false,
        },
        {
          name: "**/avatar**",
          value: " ``Avatarınızı Atar`` ",
          inline: false,
        },
        {
          name: "/kullanıcı-bilgi",
          value: " ``Bilgini Gösterir`` ",
          inline: false,
        }
      );
    interaction.reply({ embeds: [embed] });
  },
};
