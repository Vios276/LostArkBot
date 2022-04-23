import { SelectMenuInteraction } from "discord.js";

export interface SelectMenu {
  name: string;
  run: (interaction: SelectMenuInteraction) => Promise<void>;
}
