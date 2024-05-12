const fastify = require('fastify');
const jwt = require('jsonwebtoken');

const authenticate = async (req, reply) => {
  try {
      const token = req.headers['authorization'];

      if (!token) {
          reply.status(401).send({ error: 'Unauthorized: No token provided' });
          return;
      }

      const decoded = jwt.verify(token.replace('Bearer ', ''), "secret");
      req.user = decoded;

  } catch (error) {
      reply.status(401).send({ error: 'Unauthorized: Invalid token' });
  }
};

const login = async (req, reply) => {
    const { username, password } = req.body;

    if (username === 'string' && password === 'string') {
        const token = jwt.sign({username: req.body.username}, "secret",{expiresIn: '1h'});
        reply.send({ token });
    } else {
        reply.status(401).send({ error: 'Unauthorized' });
    }
};

module.exports = { authenticate, login };
