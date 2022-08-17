'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('Customers', 'email', {
            type: Sequelize.STRING,
        });
    },
};