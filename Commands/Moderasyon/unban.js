const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("unban")
    .setDescription("Kullanıcının Yasaklamasını Açarsınız.")
    .addStringOption((option) =>
      option
        .setName("id")
        .setDescription("Kullanıcı ID Giriniz.")
        .setRequired(true)
    ),

  /**
   *
   * @param {import("discord.js").Interaction} interaction
   */

  async execute(interaction) {
    const errEmbed = new EmbedBuilder()
      .setColor("Red")
      .setDescription(
        `ıııı şey üyeleri yasakla yetkin ${interaction.user.username}.`
      )
      .setTimestamp();

    const Embeed = new EmbedBuilder()
      .setColor("Green")
      .setDescription(
        `**Kullanıcının Yasağını Kaldırdım ${interaction.user.username}.**`
      )
      .setTimestamp();

    const user = interaction.options.getString("id");

    if (!interaction.member.permissions.has(PermissionFlagsBits.BanMembers))
      return interaction.reply({ embeds: [errEmbed], ephemeral: true });

    interaction.guild.members.unban(user);
    interaction.reply({ embeds: [Embeed] });
  },
};
