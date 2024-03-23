const { app } = require('@azure/functions');

/**
 * day la api sau khi tao xong
 * co 2 cach de deploy cach dau tien deploy truc tiep qua azure cli local
 *   getname: [GET,POST] http://localhost:7071/api/getname
        httpTrigger: [GET,POST] http://localhost:7071/api/httpTrigger
        
 */
app.http('getname', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `demo runngin node app  hello ${name}` };
    }
});
