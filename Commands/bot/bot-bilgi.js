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
    .setName("bot-bilgi")
    .setDescription("Botun İstatistiğini Gösterir."),

  /**
   * @param {Client} client
   * @param {import("discord.js").Interaction} interaction
   */

  async execute(interaction, client) {
    const emoji = {
      dev: "<:developer:1043975873944113162>",
      kare: "<:kare:1074696158590533712>",
      ses: "<:seskanali:1074696485653971025>",
      user: "<:user:1074694907542896690>",
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
      .setTitle(` \`${config.botName}\` Bot İstatistiği.`)
      .setFields(
        {
          name: "**Geliştirici.**",
          value: `${emoji.dev} <@575626408873689118>`,
          inline: false,
        },
        {
          name: "**Toplam Sunucu.**",
          value: `💎 \`${client.guilds.cache.size}\` `,
          inline: true,
        },
        {
          name: "**Toplam Kullanıcı.**",
          value: `${emoji.user} \`${client.users.cache.size}\` `,
          inline: true,
        },
        {
          name: "**Toplam Kanal.**",
          value: `${emoji.kare} \`${client.channels.cache.size}\` `,
          inline: false,
        },
        {
          name: "Ping",
          value: `📍 \`${client.ws.ping} ms\` `,
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
