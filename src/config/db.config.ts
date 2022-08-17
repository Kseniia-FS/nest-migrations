/* eslint-disable prettier/prettier */
import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT  || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
}));
