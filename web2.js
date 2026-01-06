const { MongoClient } = require('mongodb'); 
const connectionString = 'mongodb://localhost:27017';
const client = new MongoClient(connectionString);

async function connectToDatabase(){
    await client.connect();
    console.log('Connected to MongoDB');
}
connectToDatabase();