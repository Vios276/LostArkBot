import { SlashCommandBuilder } from "@discordjs/builders";
import {
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  MessageSelectMenu,
} from "discord.js";
import { Command } from "../ineterfaces/Command";
import { getCamperData } from "../modules/getCamperData";
import { updateCamperData } from "../modules/updateCamperData";

export const lfgCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("파티생성")
    .setDescription("새로운 파티 혹은 공격대를 모집합니다")
    .addStringOption((option) =>
      option.setName("제목").setDescription("파티 제목").setRequired(true)
    ),
  run: async (interaction) => {
    await interaction.deferReply({
      ephemeral: true,
    });

    const raid = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("raid")
        .setPlaceholder("목표 군단장 선택")
        .addOptions([
          {
            label: "발탄",
            value: "first_option",
          },
          {
            label: "비아키스",
            value: "second_option",
          },
          {
            label: "쿠크세이튼",
            value: "third_option",
          },
          {
            label: "아브렐슈드",
            value: "fourth_option",
          },
        ])
    );

    const button = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("primary")
        .setLabel("Primary")
        .setStyle("PRIMARY")
        .setEmoji("🍎")
    );

    await interaction.editReply({
      content: "레이드를 선택해주세요",
      components: [raid],
    });
  },
};
