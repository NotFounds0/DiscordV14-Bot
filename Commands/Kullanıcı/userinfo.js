const { SlashCommandBuilder, EmbedBuilder, Client } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kullanıcı-bilgi")
    .setDescription("Kullanıcının Bilgilerini Gösterir.")
    .addUserOption((option) =>
      option
        .setName("kullanıcı")
        .setDescription("Bilgisini Görmek İstediğin Kullanıcıyı Etiketle.")
        .setRequired(false)
    ),

  /**
   * @param {import("discord.js").Interaction} interaction
   */

  async execute(interaction) {
    const user = interaction.options.getUser("kullanıcı") || interaction.user;
    const member = interaction.guild.members.cache.get(user.id);
    //flags

    const embed = new EmbedBuilder()
      .setTitle(`**${user.username}** Kullanıcı bilgileri`)
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .addFields(
        {
          name: "**Kullanıcı İsim**",
          value: ` \`${user.tag}\` `,
          inline: false,
        },
        {
          name: "Takma Ad",
          value: ` \`${member?.nickname || "Yok"}\` `,
          inline: false,
        },
        {
          name: "Sunucuya Katılma Tarihi",
          value: `<t:${Math.floor(
            new Date(member?.joinedTimestamp) / 1000
          )}:R>`,
          inline: false,
        },
        {
          name: "**Discorda Katılma Tarihi**",
          value: `<t:${Math.floor(new Date(user.createdTimestamp) / 1000)}:R>`,
          inline: false,
        },
        {
          name: "**Roller**",
          value:
            `(${
              member?.roles?.cache.filter((x) => x.name !== "@everyone").size
            }) ${member?.roles?.cache
              .filter((x) => x.name !== "@everyone")
              .sort((a, b) => b.rawPosition - a.rawPosition)
              .map((x) => x)
              .slice(0, 2)}` || "Yok",
          inline: true,
        }
      )
      .setColor("Blue")
      .setTimestamp()
      .setFooter({
        text: interaction.user.tag,
        iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
      });

    interaction.reply({ embeds: [embed] });
  },
};
