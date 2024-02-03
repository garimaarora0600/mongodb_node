const express=require('express');
// for db connection
const dbConnection=require('./mongodb');
const app=express();
// for delete 
const mongodb=require('mongodb');
// routing
// to get the data we sent through postman, we're using app.use
app.use(express.json());
app.get('/',async(req,res)=>{
    let data=await dbConnection();
    data= await data.find().toArray();
    console.log(data);
    // req is when we get data from API
    // res.send({name:'Garima'});
    res.send(data);
});

// whenever we need to save new data in our database, we use POST API
// it's not such a rule that we can't have the same URL's in both get and post
app.post('/',async (req,res)=>{
    console.log(req.body);
    // res.send({name:'Garima'})
    // insert data thorugh postman in mongodb
    let data= await dbConnection();
    // req = data from post man or react/angular in nodejs
    let result=await data.insertOne(req.body);
//    res= api which is giving response
    res.send(result);
    // res.send(req.body);
})
// how to save the data into mongoDB

// now how can we get the data in nodejs from postman(the data which we sent)
// for that we need to add data in postman


app.put('/',async(req,res)=>{
    // console.log(req.body);
    // res.send({result:"update"})
    let data=await dbConnection();
    let result=data.updateOne(
        {name:"Garima Arora"},
        {$set:{university:"DU"}}
        // if dynamic data
        // {name:req.body.name}
        // {$set:req.body}
    )
    res.send(result);
})



app.delete('/:id',async(req,res)=>{
    console.log(req.params.id);
    const data=await dbConnection();
    const result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    res.send(result);
    // res.send("done!!");
})
app.listen(5000);


// we can't pass body in GET method