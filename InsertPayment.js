const { MongoClient } = require('mongodb')
const uri = 'mongodb://127.0.0.1:27017';
const dbname = 'Ecommercedatabase1';
const collectionName = "Payment";
const data = [{ _id: 1, Payment_id: 1001, Order_id: 1, Payment_date: "ISO(2023-7-3)", Payment_method: "Online", Amount: 20000, Payment_status: "Pendding" },
{ _id: 2, Payment_id: 1002, Order_id: 2, Payment_date: "ISO(2023-7-4)", Payment_method: "Online", Amount: 20000, Payment_status: "Successfull" }, { _id: 3, Payment_id: 1003, Order_id: 3, Payment_date: "ISO(2023-7-5)", Payment_method: "Cash", Amount: 30000, Payment_status: "Pendding" },
{ _id: 4, Payment_id: 1004, Order_id: 4, Payment_date: "ISO(2023-7-6)", Payment_method: "Online", Amount: 40000, Payment_status: "Faild" },
{ _id: 5, Payment_id: 1005, Order_id: 5, Payment_date: "ISO(2023-7-7)", Payment_method: "Cash", Amount: 50000, Payment_status: "Successfull" }]
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