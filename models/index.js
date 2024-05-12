// models/index.js
const pg = require('pg');
const { Sequelize } = require('sequelize');
const TransactionModel = require('./transaction');

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    username: 'postgres',
    password: 'admin'
});

const Transaction = TransactionModel(sequelize);

module.exports = {
    sequelize,
    Transaction
};
