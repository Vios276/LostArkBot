import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageActionRow, MessageSelectMenu } from "discord.js";
import { SelectMenu } from "../ineterfaces/SelectMenu";

export const raid: SelectMenu = {
  name: "raid",
  run: async (interaction) => {
    await interaction.deferUpdate();

    const difficulty = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("difficulty")
        .setPlaceholder("난이도 선택")
        .addOptions([
          {
            label: "특별",
            value: "first_option",
          },
          {
            label: "노말",
            value: "second_option",
          },
          {
            label: "하드",
            value: "third_option",
          },
          {
            label: "헬",
            value: "fourth_option",
          },
        ])
    );

    await interaction.editReply({
      content: "난이도를 선택해주세요",
      components: [difficulty],
    });
  },
};
