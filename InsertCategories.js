const { MongoClient } = require('mongodb')
const uri = 'mongodb://127.0.0.1:27017';
const dbname = 'Ecommercedatabase1';
const collectionName = "Categories";
const data = [{ _id: 1, Catagory_id: 1, Catagory_Name: "Smartphones and accessories", Description: "This is Guarrented Product", Catagory_id: 101 }, { _id: 2, Catagory_id: 2, Catagory_Name: "Laptops and notebooks", Description: "This is Guarrented Product", Catagory_id: 102 },
{ _id: 3, Catagory_id: 3, Catagory_Name: "Apparel and clothing items", Description: "This is Guarrented Product", Catagory_id: 103 },
{ _id: 4, Catagory_id: 4, Catagory_Name: "Home furniture", Description: "This is Guarrented Product", Catagory_id: 104 }

]
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