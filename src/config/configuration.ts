/* eslint-disable prettier/prettier */
export default () => ({
  application: {
    server: {
      port: parseInt(process.env.SERVER_PORT, 10),
    },
  },

  services: {
    sequelize: {
      dialect: process.env.DB_DIALECT,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      name: process.env.DB_NAME,
    },
  },
});
