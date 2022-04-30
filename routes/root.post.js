'use strict'

module.exports = async function (fastify, opts) {
    fastify.post('/', {
        schema: {
            body: {
                properties: {
                    hello: { type: 'string' }
                },
                required: [ 'hello' ]
            }
        }
    }, async function (request, reply) {
        fastify.log.info('Handling request')
        return { root: true }
    })
}
