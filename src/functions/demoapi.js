const { app } = require('@azure/functions');

app.http('demoapi', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';
        const date = new Date()
        return { body: `Hello, ${name} ${date}!` };
    }
});
