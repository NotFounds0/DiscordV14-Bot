const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kurucu-kim")
    .setDescription("Sunucunun Kurucusunu Gösterir"),

  /**
   * @param {import("discord.js").Interaction} interaction
   */

  async execute(interaction) {
    const kurucu = interaction.guild.members.cache.get(
      interaction.guild.ownerId
    );

    const Embed = new EmbedBuilder()
      .setColor("Blurple")
      .setDescription(
        ` \`${interaction.guild.name}\` Sunucusunun \n \n **Kurucusu:** \`${kurucu.user.tag}\` `
      );

    interaction.reply({ embeds: [Embed] });
  },
};
