const { MongoClient } = require('mongodb')
const uri = 'mongodb://127.0.0.1:27017';
const dbname = 'Ecommercedatabase1';
const collectionName = "Review";
const data = [{ _id: 1, ReviewID: 1001, User_id: 1, Product_id: 1, Rating: 4, Reviewtext: "Good Product" },
{ _id: 2, ReviewID: 1002, User_id: 2, Product_id: 2, Rating: 5, Reviewtext: " vary Good Product" },
{ _id: 3, ReviewID: 1003, User_id: 3, Product_id: 3, Rating: 2, Reviewtext: "Good Product" },
{ _id: 4, ReviewID: 1004, User_id: 4, Product_id: 4, Rating: 5, Reviewtext: "Good Product" },
{ _id: 5, ReviewID: 1005, User_id: 5, Product_id: 5, Rating: 3, Reviewtext: "Good Product" }]
async function insertdata() {
    const client = new MongoClient(uri)
    try {
        await client.connect();
        const db = client.db(dbname)
        const collection = db.collection(collectionName)
        const result = await collection.insertMany(data)
        console.log('inserted document id', result.insertedId)
    }
    catch (err) {
        console.error('error inserted data', err)
    }
    finally {
        client.close();
    }
}
insertdata();