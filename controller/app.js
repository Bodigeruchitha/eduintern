let express = require("express");
let obj = express();
let port = 5768;
let {dbconnect,getData} =require('./controller/dbController')

obj.get( "/",(req,res)=>{ 
    res.send("hi from server")

})
obj.get("/location",async(req,res)=>{
    let query = {};
    let collection = "location"
    let output = await getData(collection,query)
    res.send(`output`)
})
// obj.get("/client",(req,res)=>{
//     res.send(`hi from client`)
// });
// obj.get("/menu",(req,res)=>{
//     res.send(`hi from menu`)
// });
obj.listen(port,(err)=>
{
    dbconnect()
    getData()
    if(err) throw err;
    console.log(`server is running on the ${port}`)
})