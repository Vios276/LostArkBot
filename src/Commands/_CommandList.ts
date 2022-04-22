import { Command } from "../ineterfaces/Command";
import { edit } from "./edit";
import { lfgCommand } from "./lfgCommand";

export const CommandList: Command[] = [lfgCommand, edit];
