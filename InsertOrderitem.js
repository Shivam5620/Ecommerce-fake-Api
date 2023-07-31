const { MongoClient } = require('mongodb')
const uri = 'mongodb://127.0.0.1:27017';
const dbname = 'Ecommercedatabase1';
const collectionName = "OrderItem";
const data = [{ _id: 1, OrderItemID: 1, Order_id: 1, Product_id: 1, Quantity: 4, Subtotal: 200000 }, { _id: 2, OrderItemID: 2, Order_id: 2, Product_id: 2, Quantity: 2, Subtotal: 10000 },
{ _id: 3, OrderItemID: 3, Order_id: 3, Product_id: 3, Quantity: 2, Subtotal: 50000 }, { _id: 4, OrderItemID: 4, Order_id: 4, Product_id: 4, Quantity: 1, Subtotal: 40000 },
{ _id: 5, OrderItemID: 5, Order_id: 5, Product_id: 5, Quantity: 1, Subtotal: 9999 }]
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