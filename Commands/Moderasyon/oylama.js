const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  EmbedBuilder,
  Client,
  ChannelType,
} = require("discord.js");
const config = require("../../config.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("oylama")
    .setDescription("Sunucuda Oylama Yaparsın.")
    .addStringOption((option) =>
      option
        .setName("yazı")
        .setDescription("Oyalama Yazısı Girin")
        .setRequired(true)
    ),

  /**
   * @param {Client} client
   * @param {import("discord.js").Interaction} interaction
   */

  async execute(interaction, client) {
    const errEmbed = new EmbedBuilder()
      .setColor("Red")
      .setDescription(`Hey **${interaction.user.username}** Admin Yetkin Yok.`);
    if (!interaction.member.permissions.has(PermissionFlagsBits.Administrator))
      return interaction.reply({ embeds: [errEmbed], ephemeral: true });

    const oylama = interaction.options.getString("yazı");
    const embed = new EmbedBuilder()
      .setTitle(`Oylama`)
      .setDescription(`Oylama: **${oylama}**`)
      .setColor("Gold")
      .setTimestamp();
    interaction.channel.send({ embeds: [embed] }).then((mesaj) => {
      const embed2 = new EmbedBuilder()
        .setColor("DarkGreen")
        .setDescription("Oylama oluşturuldu");
      interaction.reply({ embeds: [embed2], ephemeral: true });
      mesaj.react("✅");
      mesaj.react("❌");
    });
  },
};
