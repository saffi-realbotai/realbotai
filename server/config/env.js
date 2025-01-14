require('dotenv').config(); // Load .env file

module.exports = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT || 3000,
  AI_SECRET_KEY: process.env.AI_SECRET_KEY // Add any secret key you need
};
