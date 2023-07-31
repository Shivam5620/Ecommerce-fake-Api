const { MongoClient } = require('mongodb')
const uri = 'mongodb://127.0.0.1:27017';
const dbname = 'Signupformdata';
const collectionName = "Users";
const data = [{ _id: 1, User_id: 1, Username: "Shivam", Full_name: "Shivam Birla", Email: 'Shivambirla997@gmail.com', Password: "Shivam@123", Address: "indore Ganesh nagar", Phone_number: 7610478479 }, { _id: 2, User_id: 2, Username: "Ram", Full_name: "Ram Undhaliya", Email: "Ram123@gmail.com", Password: "Ram@123", Address: "indore ", Phone_number: 32837478479 }, { _id: 3, User_id: 3, Username: "Shyam", Full_name: "Shyam Birla", Email: 'Shyam123@gmail.com', Password: "Shyam@123", Address: "Khargone", Phone_number: 1234478479 }, { _id: 4, User_id: 4, Username: "Chetan", Full_name: "Chetan Birla", Email: 'Chetan123@gmail.com', Password: "Chetan@123", Address: "Delhi", Phone_number: 222478479 }, { _id: 5, User_id: 4, Username: "Arun", Full_name: "Arun Birla", Email: 'Arun123@gmail.com', Password: "Arun@123", Address: "Sanawad", Phone_number: 3333333333 }]
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