const transactionController = require('../controllers/transactionController');
const authController = require('../controllers/authController');

module.exports = async function (fastify, options) {
    fastify.post('/send', {
        onRequest: [authController.authenticate],
        schema: {
            headers: {
                type: 'object',
                properties: {
                    Authorization: { type: 'string' }
                },
                required: ['Authorization']
            },
            body: {
                type: 'object',
                properties: {
                    user_id: { type: 'integer' },
                    account_type: { type: 'string' },
                    amount: { type: 'integer' },
                    transaction_type: { type: 'string' },
                    to_address: { type: 'string' },
                    status: { type: 'string' },
                },
                required: ['user_id', 'account_type', 'amount', 'transaction_type', 'to_address', 'status']
                
            }
        }
    },transactionController.send);
    fastify.post('/withdraw', {
        onRequest: [authController.authenticate],
        schema: {
            headers: {
                type: 'object',
                properties: {
                    Authorization: { type: 'string' }
                },
                required: ['Authorization']
            },
            body: {
                type: 'object',
                properties: {
                    user_id: { type: 'integer' },
                    account_type: { type: 'string' },
                    amount: { type: 'integer' },
                    transaction_type: { type: 'string' },
                    to_address: { type: 'string' },
                    status: { type: 'string' },
                },
                required: ['user_id', 'account_type', 'amount', 'transaction_type', 'to_address', 'status']
                
            }
        }
    },transactionController.withdraw);
};
