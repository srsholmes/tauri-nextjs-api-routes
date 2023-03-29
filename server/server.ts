import Fastify from 'fastify';
import cors from '@fastify/cors';
import { add } from '@/shared/add';

const fastify = Fastify({
  logger: true,
});

fastify.register(cors);

const PORT = 5661;

fastify.get('/add', async (req, res) => {
  const added = add(1, 2);
  res.type('application/json').status(200).send(added);
});

fastify.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
