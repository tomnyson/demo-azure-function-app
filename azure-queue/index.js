const { QueueServiceClient } = require("@azure/storage-queue");

// Retrieve the connection string
const connectionString = "DefaultEndpointsProtocol=https;AccountName=demostoragetomnyson;AccountKey=rfC6c0t6mhFNI/IW/LuP6giZ7Pit2CkqW1zMzGceEj2p+B8O6SAWhOOn9ARoIyyrRzmYnwqQ8lwy+AStKzNkhw==;EndpointSuffix=core.windows.net";

// Instantiate a QueueServiceClient
const queueServiceClient = QueueServiceClient.fromConnectionString(connectionString);

// Create a unique name for the queue
const queueName = "queeuetomnyson";

async function sendMessage(message) {
    const queueClient = queueServiceClient.getQueueClient(queueName);
    const sendMessageResponse = await queueClient.sendMessage(Buffer.from(message).toString('base64'));
    console.log(`Sent message: ${message}`);
}


async function createQueue() {
    // Instantiate a QueueClient which will be used to create and manipulate a queue
    const queueClient = queueServiceClient.getQueueClient(queueName);
    // Create the queue
    for(let i=0; i<100; i++) {
        sendMessage("Hello, Azure! "+ i).catch(console.error);;
    }
    // await queueClient.create();
    // console.log(`Queue "${queueName}" created`);
}

createQueue().catch(console.error);
