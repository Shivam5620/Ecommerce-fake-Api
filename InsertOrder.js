const { MongoClient } = require('mongodb')
const uri = 'mongodb://127.0.0.1:27017';
const dbname = 'Ecommercedatabase1';
const collectionName = "Orders";
const data = [{ _id: 1, Order_id: 1, User_id: 1, Order_date: 11 - 11 - 2023, Total_Amount: 9999.99, Order_status: "Shipped", Shipping_Address: "Indore" }, { _id: 2, Order_id: 2, User_id: 2, Order_date: 12 - 11 - 2023, Total_Amount: 7999.99, Order_status: "Deliverd", Shipping_Address: "Delhi" },
{ _id: 3, Order_id: 3, User_id: 3, Order_date: 13 - 11 - 2023, Total_Amount: 8999.99, Order_status: "Pending", Shipping_Address: "Khargone" },
{ _id: 4, Order_id: 4, User_id: 4, Order_date: 14 - 11 - 2023, Total_Amount: 10999.99, Order_status: "Pending", Shipping_Address: "Sanawad" },
{ _id: 5, Order_id: 5, User_id: 5, Order_date: 15 - 11 - 2023, Total_Amount: 11999.99, Order_status: "Dliverd", Shipping_Address: "Bhopal" }]
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