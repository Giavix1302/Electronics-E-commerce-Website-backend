import 'dotenv/config'
export const env = {
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  MONGODB_URL: process.env.MONGODB_URL,
  DATABASE_NAME: process.env.DATABASE_NAME,
}