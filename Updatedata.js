const { MongoClient } = require('mongodb')
const uri = 'mongodb://127.0.0.1:27017';
const dbname = 'Ecommercedatabase1';
const collectionName = "Customers";
// const data = ({_id:2},{$set:{Address:"Indore Bhawarkua"}})
async function updatedata() {
  const client = new MongoClient(uri)
  try {
    await client.connect();
    const db = client.db(dbname)
    const collection = db.collection(collectionName)
    const result = await collection.updateOne({ _id: 2 }, { $set: { Address: "Indore Vijay-Nagar,452001" } })
    console.log('inserted document id', result._id)
  }
  catch (err) {
    console.error('error inserted data', err)
  }
  finally {
    client.close();
  }
}
updatedata();