const http = require('http');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // Read the name from the query string or the request body.
    const name = (req.query.name || (req.body && req.body.name));

    if (name) {
        // Respond with a greeting if a name is provided
        context.res = {
            // status defaults to 200
            body: "Hello, " + name
        };
    } else {
        // Prompt for a name if one isn't provided
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};
