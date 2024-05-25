const { SlashCommandBuilder, EmbedBuilder,PermissionFlagsBits } = require("discord.js");
const db = require("croxydb")
const config = require('../../config.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sa-as')
        .setDescription('sa-as açarsın'),

    /**
     * @param {import("discord.js").Interaction} interaction 
     */

    async execute(interaction) {

        const errEmbed2 = new EmbedBuilder()
        .setColor('Red')
        .setDescription(`Hey **${interaction.user.username}** Mesajları Yönet Yetkin Yok.`)

        if (!interaction.member.permissions.has(PermissionFlagsBits.ManageMessages)) return interaction.reply({ embeds: [errEmbed2], ephemeral: true })

        const errEmbed = new EmbedBuilder()
            .setColor("Red")
            .setTitle(`${config.botName} Sa-As Sistemi`)
            .setDescription("Sistem Kapatıldı.")

        const Embed = new EmbedBuilder()
            .setColor("Green")
            .setTitle(`${config.botName} Sa-As Sistemi`)
            .setDescription("Sistem Açıldı.")

        let saas = db.fetch(`saas_${interaction.guild.id}`);

        if (saas) {
            db.delete(`saas_${interaction.guild.id}`);
            interaction.reply({ embeds: [errEmbed]})
            return
        }
        if (!saas) {
            db.set(`saas_${interaction.guild.id}`, true);
            interaction.reply({ embeds: [Embed]})
            return
        }

    }


}