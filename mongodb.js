const {MongoClient}= require('mongodb');
// mongodb path(to find where mongodb is) 
const url='mongodb://localhost:27017';
const database= 'students'

const client=new MongoClient(url);


async function dbConnection(){
    let result= await client.connect();
    let db=result.db(database);
    return db.collection('details');
    // let response=await collection.find({}).toArray();
    // console.log(response);
}

module.exports=dbConnection;