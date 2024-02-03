const dbConnection=require('./mongodb');
const update=async()=>{
    const db=await dbConnection();
    // console.log(db);
    const result= await db.updateOne(
        {name:"Ashneer Grover"},{$set:{university:"IIM Ahemdabad"}}
    );

    // console.log(result);
    if(result.acknowledged)
    {
        console.log("data updated!!");
    }
}
update();