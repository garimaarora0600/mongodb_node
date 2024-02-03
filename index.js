// const {MongoClient}= require('mongodb');
// // mongodb path(to find where mongodb is) 
// const url='mongodb://localhost:27017';
// // we need to pass this url to MongoClient so that mongodb package gets to know that we need to fetch the data from the path we provided

// const database= 'students'
// // nodejs is client and mongodb is server
// // and we're fetching data from mongodb and we're having data on client
// const client=new MongoClient(url);


// async function getData(){
//     // let result=  client.connect(); //get the result and it returns the promise so we use await to handle promises, and for await, we need to use async keyword before function
//     let result= await client.connect();
//     // we need to specify which database we would like to have connection with 
//     // let db=result.db('students'); //or we can use a common method like declaring above with const database=
//     let db=result.db(database);

//     // we need to specify which collection/table we want to use
//     let collection=db.collection('details');
//     // to handle the promise we got in console
//     let response=await collection.find({}).toArray();
//     // find({}) will fetch all the data the collection has 
//     // toArray() make it into a structured format
//     // console.log(collection.find({}).toArray());
//     console.log(response);
// }
// getData();


// // can we connect two databases at the same time? Yes, we can do that using the same method

const dbConnection=require('./mongodb')

// console.warn(dbConnection());  //console= Promise{<pending>}

// so to handle the promise
// dbConnection().then((res)=>{
//     // console.warn(res.find().toArray());//toArray also a promise and returns a promise
//     res.find({name:"Garima Arora"}).toArray().then((data)=>{
//         console.warn(data);
//     })
// })


// alternative way of above
const main= async ()=>{
   let data=await dbConnection();
   data=  await data.find().toArray();
console.warn(data);
}
main();