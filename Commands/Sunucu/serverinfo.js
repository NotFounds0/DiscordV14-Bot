const {
  SlashCommandBuilder,
  EmbedBuilder,
  Client,
  ChannelType,
  GuildExplicitContentFilter,
  GuildVerificationLevel,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sunucu-bilgi")
    .setDescription("Sunucunun Bilgilerini Gösterir."),

  /**
   * @param {import("discord.js").Interaction} interaction
   */

  async execute(interaction) {
    const emoji = {
      kare: "<:kare:1074696158590533712>",
      ses: "<:seskanali:1074696485653971025>",
      category: "<:chat:1074694942787637379>",
      user: "<:user:1074694907542896690>",
    };
    const owner = interaction.guild.members.cache.get(
      interaction.guild.ownerId
    );
    const embed = new EmbedBuilder()
      .setThumbnail(interaction.guild.iconURL())
      .addFields(
        {
          name: "#Genel",
          value: `**Kurucu:** \`${owner.user.username}\`\n**Destekler:** \`${interaction.guild.premiumSubscriptionCount}\`\n**Yükseltme Seviyesi:** \`${interaction.guild.premiumTier}\` \n**Toplam Üye:** ${emoji.user}\`${interaction.guild.memberCount}\``,
          inline: false,
        },
        {
          name: "#Diğer",
          value: `**Toplam Roller:** \`${
            interaction.guild.roles.cache.size
          }\`\n **Toplam Kanallar:** \`${
            interaction.guild.channels.cache.size
          }\` - ${emoji.category} \`${
            interaction.guild.channels.cache.filter(
              (x) => x.type === ChannelType.GuildText
            ).size
          }\` - ${emoji.ses} \`${
            interaction.guild.channels.cache.filter(
              (x) => x.type === ChannelType.GuildVoice
            ).size
          }\` - ${emoji.kare} \`${
            interaction.guild.channels.cache.filter(
              (x) => x.type === ChannelType.GuildCategory
            ).size
          }\``,
          inline: false,
        }
      )
      .setColor("Blue");
    interaction.reply({ embeds: [embed] });
  },
};
