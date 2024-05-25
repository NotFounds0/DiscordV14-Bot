const {
  SlashCommandBuilder,
  ButtonBuilder,
  ActionRowBuilder,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Kullanıcının Avatarını Gösterir.")
    .addUserOption((option) =>
      option
        .setName("kullanıcı")
        .setDescription("kullanıcı Etiketleyin.")
        .setRequired(false)
    ),

  /**
   *
   * @param {import("discord.js").Interaction} interaction
   */

  async execute(interaction) {
    const user = interaction.options.get("kullanıcı")?.user || interaction.user;

    const embed = new EmbedBuilder()
      .setTitle(`${user.username} Kullanıcsının Avatarı`)
      .setImage(user.displayAvatarURL({ size: 4096 }))
      .setColor("DarkNavy")
      .setTimestamp();

    const formats = ["png", "jpg", "jpeg", "gif"];
    const components = [];
    formats.forEach((format) => {
      let imageOptions = {
        extension: format,
        forceStatic: format == "gif" ? false : true,
      };

      if (user.avatar == null && format !== "png") return;
      if (!user.avatar.startsWith("a_") && format === "gif") return;
      components.push(
        new ButtonBuilder()
          .setLabel(format.toUpperCase())
          .setStyle("Link")
          .setURL(user.displayAvatarURL(imageOptions))
      );
    });

    const row = new ActionRowBuilder().addComponents(components);

    return interaction.reply({ embeds: [embed], components: [row] });
  },
};
