const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sil")
    .setDescription("Mesaj Siler")
    .addIntegerOption((option) =>
      option
        .setName("sayı")
        .setDescription(
          "silinecek mesaj sayısını giriniz **100 ün üstünde olmasın**"
        )
        .setRequired(true)
    ),

  /**
   *
   * @param {import('discord.js').Interaction} interaction
   */

  async execute(interaction) {
    const sayi = interaction.options.getInteger("sayı");

    const errEmbed = new EmbedBuilder()
      .setColor("Red")
      .setDescription(
        `Hey **${interaction.user.username}** Mesajları Yönet Yetkin Yok.`
      );

    if (!interaction.member.permissions.has(PermissionFlagsBits.ManageMessages))
      return interaction.reply({ embeds: [errEmbed], ephemeral: true });

    const Embed = new EmbedBuilder()
      .setColor("Green")
      .setDescription(
        `Hey **${interaction.user.username}** Başarıyla \`${sayi}\` Adet Mesaj Sildim.`
      );

    interaction.channel.bulkDelete(sayi);

    interaction.reply({ embeds: [Embed] });
  },
};
