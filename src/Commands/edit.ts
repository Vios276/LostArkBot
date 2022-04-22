import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "../ineterfaces/Command";

export const edit: Command = {
  data: new SlashCommandBuilder()
    .setName("edit")
    .setDescription("Edit Message")
    .addStringOption((option) =>
      option
        .setName("embed-id")
        .setDescription("ID of message to edit")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option.setName("message").setDescription("message edit").setRequired(true)
    ),
  run: async (interaction) => {
    await interaction.deferReply();
    const { channel, user } = interaction;
    const targetID = interaction.options.getString("embed-id", true);
    const text = interaction.options.getString("message", true);

    if (!channel) {
      await interaction.editReply({ content: "Missing channel parameter." });
      return;
    }

    const targetMessage = await channel.messages.fetch(targetID);

    if (!targetMessage) {
      await interaction.editReply({
        content:
          "That does not appear to be a valid message ID. Be sure that you are using this command in the same channel as the message.",
      });
      return;
    }

    const targetEmbed = targetMessage.embeds[0];

    if (targetEmbed.author?.name !== user.tag) {
      await interaction.editReply({
        content:
          "This does not appear to be your 100 Days of Code post. You cannot edit it.",
      });
    }

    targetEmbed.setDescription(text);
    await targetMessage.edit({ embeds: [targetEmbed] });
    await interaction.editReply({ content: "Updated!" });
  },
};
