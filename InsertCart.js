const { MongoClient } = require('mongodb')
const uri = 'mongodb://127.0.0.1:27017';
const dbname = 'Ecommercedatabase1';
const collectionName = "Cart";
const data = [{ _id: 1, CardID: 2001, User_id: 1, Product_id: 1, Quantity: 2 },
{ _id: 2, CardID: 2002, User_id: 2, Product_id: 2, Quantity: 3 },
{ _id: 3, CardID: 2003, User_id: 3, Product_id: 3, Quantity: 1 },
{ _id: 4, CardID: 2004, User_id: 4, Product_id: 4, Quantity: 4 },
{ _id: 5, CardID: 2005, User_id: 5, Product_id: 5, Quantity: 3 }]
async function insertdata() {
    const client = new MongoClient(uri)
    try {
        await client.connect();
        const db = client.db(dbname)
        const collection = db.collection(collectionName)
        const result = await collection.insertMany(data)
        console.log('inserted document id', result.insertedId, 1)
    }
    catch (err) {
        console.error('error inserted data', err)
    }
    finally {
        client.close();
    }
}
insertdata();