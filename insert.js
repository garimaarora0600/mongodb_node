const dbConnection=require('./mongodb');
const insertt= async ()=>{
    // it returns a promise, so need to use async/await
    const db= await dbConnection();
    // console.log(db);
    // we need to insert the data
    // const result=await db.insertOne(
    //     {rno:5,name:"Ashneer Grover",degree:"MBA",univesity:"IIT Delhi"}
    //     )



    // insert multiple records
    const result=await db.insertMany(
    [{rno:6,name:"Aman Gupta",degree:"MBA",univesity:"IIM Ahemdabad"},
{rno:7,name:"Vaishali Thakur",degree:"M.Tech",university:"UPES"}]
        )

    // console.log(result); //we're getting promise
    // console.log(result); //giving acknowledged, insertID
    if(result.acknowledged)
    {
        console.log("data inserted!!");
    }
}

insertt();