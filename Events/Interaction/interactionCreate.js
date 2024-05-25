const { CommandInteraction, EmbedBuilder, Client } = require('discord.js')

module.exports = {
    name: "interactionCreate",

    /**
     * 
     * @param {import('discord.js').Interaction} interaction 
     * @param {Client} client 
     * @returns 
     */

    execute(interaction, client) {
        if (!interaction.isChatInputCommand()) return

        const command = client.commands.get(interaction.commandName)

        if (!command) {
            interaction.reply({ content: "outdated command" })

        }


        command.execute(interaction, client)

    }
}