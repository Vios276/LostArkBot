import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import { Command } from "../ineterfaces/Command";
import { getCamperData } from "../modules/getCamperData";
import { updateCamperData } from "../modules/updateCamperData";

export const lfgCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("100")
    .setDescription("create new party")
    .addStringOption((option) =>
      option.setName("message").setDescription("test").setRequired(true)
    ),
  run: async (interaction) => {
    await interaction.deferReply();
    const { user } = interaction;
    const text = interaction.options.getString("message", true);

    const targetCamper = await getCamperData(user.id);
    const updateCamper = await updateCamperData(targetCamper);

    const messageEmbed = new MessageEmbed();
    messageEmbed.setTitle("test");
    messageEmbed.setDescription(text);
    messageEmbed.setAuthor({
      name: user.tag,
      iconURL: user.displayAvatarURL(),
    });
    messageEmbed.addField("Round", updateCamper.round.toString(), true);
    messageEmbed.addField("Day", updateCamper.day.toString(), true);
    messageEmbed.setFooter({
      text:
        "Day completed: " +
        new Date(updateCamper.timestamp).toLocaleDateString(),
    });

    await interaction.editReply({ embeds: [messageEmbed] });
  },
};
