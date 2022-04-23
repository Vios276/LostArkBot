import { MessageEmbed } from "discord.js";
import { SelectMenu } from "../ineterfaces/SelectMenu";

export const difficulty: SelectMenu = {
  name: "difficulty",
  run: async (interaction) => {
    await interaction.deferUpdate();
    const { user } = interaction;

    const messageEmbed = new MessageEmbed();
    messageEmbed.setTitle("title");
    messageEmbed.setDescription("des");
    messageEmbed.setAuthor({
      name: user.tag,
      iconURL: user.displayAvatarURL(),
    });
    messageEmbed.setFooter({
      text: "Day completed: ",
    });

    await interaction.editReply({
      content: "파티모집이 생성되었습니다.",
      embeds: [],
      components: [],
    });
    await interaction.channel!.send({ embeds: [messageEmbed] });
  },
};
