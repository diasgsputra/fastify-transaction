const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Transaction = sequelize.define('transaction', {
        user_id: {
            type: DataTypes.INTEGER,
        },
        account_type: {
            type: DataTypes.STRING,
        },
        amount: {
            type: DataTypes.INTEGER,
        },
        transaction_type: {
            type: DataTypes.STRING,
        },
        to_address: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.STRING,
        }
    });


    return Transaction;
};
