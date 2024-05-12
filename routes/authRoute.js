const authController = require('../controllers/authController');

module.exports = async function (fastify, options) {
    fastify.post('/login', {
        schema: {
            body: {
                type: 'object',
                properties: {
                    username: { type: 'string' },
                    password: { type: 'string' }
                },
                required: ['username', 'password']
            }
        }
    },authController.login);
};
