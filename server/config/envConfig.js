require('dotenv').config();

const envConfig = {
  port: process.env.PORT || 5000,
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  nodeEnv: process.env.NODE_ENV || 'development',
  openAIKey: process.env.OPENAI_API_KEY,
  googleCredentials: process.env.GOOGLE_APPLICATION_CREDENTIALS,
};

if (!envConfig.mongoURI) {
  throw new Error('MONGO_URI is not defined in environment variables.');
}
if (!envConfig.jwtSecret) {
  throw new Error('JWT_SECRET is not defined in environment variables.');
}
if (!envConfig.openAIKey) {
  throw new Error('OPENAI_API_KEY is not defined in environment variables.');
}
if (!envConfig.googleCredentials) {
  throw new Error('GOOGLE_APPLICATION_CREDENTIALS is not defined in environment variables.');
}

module.exports = envConfig;
