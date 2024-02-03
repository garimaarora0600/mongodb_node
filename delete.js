const dbConnection=require('./mongodb');

const del=async()=>{
    const db=await dbConnection();
    // console.log(db);
    const result=await db.deleteOne(
        {name:"Ashneer Grover"}
    )
    if(result.acknowledged){
        console.log("record deleted successfully!!")
    }
}
del();