import { Interaction, MessageEmbed } from "discord.js";
import { CommandList } from "../Commands/_CommandList";
import { SelectMenuList } from "../SelectMenus/_SelectMenuList";

export const onInteraction = async (interaction: Interaction) => {
  if (interaction.isCommand()) {
    for (const Command of CommandList) {
      if (interaction.commandName === Command.data.name) {
        await Command.run(interaction);
        break;
      }
    }
  }
  if (interaction.isSelectMenu()) {
    for (const Menu of SelectMenuList) {
      if (interaction.customId === Menu.name) {
        await Menu.run(interaction);
      }
    }
  }
};
