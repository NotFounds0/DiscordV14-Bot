const {
  SlashCommandBuilder,
  EmbedBuilder,
  Client,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");
const config = require("../../config.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("davet")
    .setDescription("Botun Davet Linkini Atar."),

  /**
   * @param {Client} client
   * @param {import("discord.js").Interaction} interaction
   */

  async execute(interaction, client) {
    const emoji = {
      link: "<:link:1074696163367850064>",
    };
    const actionRow = new ActionRowBuilder().addComponents([
      new ButtonBuilder()
        .setLabel("Davet Et")
        .setURL(config.botDavet)
        .setStyle(ButtonStyle.Link)
        .setEmoji(emoji.link),
      new ButtonBuilder()
        .setLabel("Web Site")
        .setURL(config.botWeb)
        .setStyle(ButtonStyle.Link)
        .setEmoji(emoji.link),
      new ButtonBuilder()
        .setLabel("Destek Sunucusu")
        .setURL(config.botDestekSunucu)
        .setStyle(ButtonStyle.Link)
        .setEmoji(emoji.link),
    ]);

    const embed = new EmbedBuilder()
      .setColor("Blue")
      .setTitle(`${config.botName} Davet Menü`)
      .setDescription(" ``Botumuzu Davet Ederek Bize Destek Verebilirsin.`` ")
      .addFields(
        {
          name: "**Bot Davet**",
          value: `[Tıkla](${config.botDavet})`,
          inline: true,
        },
        {
          name: "**WebSite**",
          value: `[Tıkla](${config.botWeb})`,
          inline: true,
        },
        {
          name: "**Bot Destek Sunucu**",
          value: `[Tıkla](${config.botDestekSunucu})`,
          inline: true,
        }
      )
      .setThumbnail(`${client.user.displayAvatarURL()}`)
      .setFooter({
        iconURL: interaction.user.displayAvatarURL(),
        text: `Sorgulayan: ${interaction.user.username}`,
      })
      .setTimestamp();

    interaction.reply({ embeds: [embed], components: [actionRow] });
  },
};
