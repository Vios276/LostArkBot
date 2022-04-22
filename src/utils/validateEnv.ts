export const validateEnv = () => {
  if (!process.env.BOT_TOKEN) {
    console.warn("Missing Discord bot token in env file.");
    return false;
  }

  if (!process.env.MONGO_URI) {
    console.warn("Missing MongoDB uri in env file.");
    return false;
  }

  if (!process.env.GUILD_ID) {
    console.warn("Missing ServerId in env file.");
    return false;
  }

  return true;
};
