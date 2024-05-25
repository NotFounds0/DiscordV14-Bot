const { Client, ActivityType } = require("discord.js");

module.exports = {
  name: "ready",
  /**
   * @param {Client} client
   */
  async execute(client) {
    client.user.setStatus("online");
    client.user.setActivity({
      name: "/yardım - /davet 💖",
      type: ActivityType.Watching,
    });
    console.log(`${client.user.username} tam teçhizat hazır`);
  },
};
