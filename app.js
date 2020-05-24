const fastify = require('fastify')({
  logger: true,
})

fastify.get('/', async (request, reply) => {
  reply.type('application/json').code(200)
  return { hello: 'world' }
})

fastify.listen(8080, '13.49.77.84', (err, address) => {
  if (err) throw err
  console.log(`Server is listening on ${address}`)
})
