const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const db = require("croxydb");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("afk")
    .setDescription("Afk Olursun.")
    .addStringOption((option) =>
      option.setName("sebep").setDescription("Afk Olma Sebebini Gir.")
    ),

  /**
   *
   * @param {import("discord.js").Interaction} interaction
   */

  async execute(interaction) {
    const sebep = interaction.options.getString("sebep") || "Sebep Girilmemiş";

    db.set(`afk_${interaction.user.id}`, sebep);

    const embed = new EmbedBuilder()
      .setColor("Green")
      .setTitle("Afk Olduuu.")
      .setTimestamp()
      .setThumbnail(interaction.user.displayAvatarURL())
      .setDescription(
        `**Afk Olan:** \n \`${interaction.user.username}\` \n **Sebep:** \n \`${sebep}\` `
      );
    //   .addFields(
    //     {
    //       name: "Afk Olan",
    //       value: `**${interaction.user.username}**`,
    //       inline: false,
    //     },
    //     {
    //       name: "Sebep",
    //       value: ` ${sebep} `,
    //       inline: false,
    //     }
    //   );

    interaction.reply({ embeds: [embed] });
  },
};
