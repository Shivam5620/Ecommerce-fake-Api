const { MongoClient } = require('mongodb')
const uri = 'mongodb://127.0.0.1:27017';
const dbname = 'Ecommercedatabase1';
const collectionName = "Product";
const data = [{ _id: 1, Product_id: 1, Product_name: "Laptop", Description: "High quality Processor", Price: 44999.99, Stock_Quantity: 50, Catagory_id: 101 }, { _id: 2, Product_id: 2, Product_name: "Mobile", Description: "High quality Processor", Price: 14999.99, Stock_Quantity: 150, Catagory_id: 102 }, { _id: 3, Product_id: 3, Product_name: "Clothes", Description: "Branded Clothes", Price: 4999.99, Stock_Quantity: 550, Catagory_id: 103 }, { _id: 4, Product_id: 4, Product_name: "LED", Description: "High quality Processor", Price: 19999.99, Stock_Quantity: 100, Catagory_id: 104 }, { _id: 5, Product_id: 5, Product_name: "TV", Description: "High quality ", Price: 9999.99, Stock_Quantity: 250, Catagory_id: 105 }]
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