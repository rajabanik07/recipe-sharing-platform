import { config } from 'dotenv';
config();

export const envs = {
  env: process.env.NODE_ENV || 'dev',
  port: Number(process.env.NODE_PORT) || 4000,
  db: {
    host: process.env.DB_HOST || '',
    port: process.env.DB_PORT || 3306,
    database: process.env.DATABASE || '',
    username: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || '',
  },
  passwordSalt: Number(process.env.PASSWORD_SALT_ROUND) || 10,
  jwt: {
    accessToken: {
      secret: process.env.USER_ACCESS_TOKEN_SECRET || '',
      expiry: Number(process.env.ACCESS_TOKEN_EXPIRED) || 3600,
    },
    refreshToken: {
      secret: process.env.USER_REFRESH_TOKEN_SECRET || '',
      expiry: Number(process.env.REFRESH_TOKE_EXPIRED) || 259200,
    },
  },
  smtp: {
    email: process.env.SMTP_AUTH_EMAIL,
    password: process.env.SMTP_AUTH_PASSWORD,
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
  },
};
