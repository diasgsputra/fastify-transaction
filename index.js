const fastify = require('fastify')({logger: true}) 
const fastifySwagger = require('@fastify/swagger');
const { sequelize } = require('./models');
const authRoute = require('./routes/authRoute');
const transactionRoute = require('./routes/transactionRoute');

fastify.register(fastifySwagger, {
  routePrefix: '/docs',
  swagger: {
    info: {
      title: 'My API',
      description: 'API documentation',
      version: '1.0.0'
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server'
      }
    ],
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  },
  exposeRoute: true
});

fastify.register(require('@fastify/jwt'),{
  secret:'mysecret'
})


fastify.register(authRoute, { prefix: '/auth' });
fastify.register(transactionRoute, { prefix: '/api' });

async function start() {
  try {
    await sequelize.authenticate(); // Authenticating Sequelize
    await sequelize.sync(); // Syncing Sequelize models with the database
    await fastify.listen(3000);
    fastify.swagger();
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();

