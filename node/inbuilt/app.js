let express = require('express');
let app = express();
let port= 9678;
let Mongo = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');
let {dbConnect,getData,postData,updateOrder} = require('./dbcontroller')

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())

app.get('/',(req,res)=>
{
    res.send("hi from express")

})
app.get('/location',async (req,res)=>{
    let query = {}
    if(req.query.stateId){
        query = {state_id:Number(req.query.stateId)}
    }
    else
    {
        query = {}
    }
    let collection = "location";
    let output = await getData(collection,query)
    res.send(output)
});

app.get('/mealtype',async (req,res)=>{
    let query = {};
    if(req.query.mealType){
        query = {meal_type:req.query.mealType}
    }
    else{
        query ={}
    }
    let collection = "mealtype";
    let output = await getData(collection,query)
    res.send(output)
});
app.get('/menu',async(req,res)=>{
    let query = {};
    let collection = "menu";
    let output = await getData(collection,query)
    res.send(output)
});
app.get('/storeid',async(req,res)=>
{
    let query ={};
    let collection = "storeid";
    let output = await getData(collection,query);
    res.send(output)
})
//details of storeid 
app.get('/details/:id',async(req,res) => {
    let id = Number(req.params.id);
    let query = {store_id:id};
    let collection = "storeid";
    let output = await getData(collection,query);
    res.send(output)
})
//details of wrt menu id
app.get('/menu/:id',async(req,res) =>{
     let id = Number(req.params.id);
     let query = {store_id:id};
     let collection ="menu";
     let output = await getData(collection,query);
     res.send(output)
})

// details of mealtype wrt to filters
app.get('/filter/:mealType', async (req, res) => {
    let mealType = req.params.mealType;
    let menuName = req.query.menuName;
    let ingredients = req.query.ingredients;
    let lprice = Number(req.query.lprice);
    let hprice = Number(req.query.hprice)
    let query;

    if (menuName) {
      query = {
        "menu.items.meal_type": mealType,
        "menu.items.menu_name": menuName
      };
    }
    else if(ingredients){
        query ={
        "menu.items.ingredients" : { $all: ingredients.split(",") }
        };
    }
    else if(lprice && hprice){
         query ={
            "menu.items.meal_type": mealType,
             $and:[{price:{$gt:lprice,$lt:hprice}}]
         }
    }
    else
     {
      query = {};
    }
    let collection = "storeid";
    let output = await getData(collection, query);
    res.send(output);
  });
  
 
// details of order
app.get('/orders',async(req,res)=>{
    let query ={};
    if(req.query.email){
        query ={email:req.query.email}
    }else{
     query= {};
    }
    let collection = "orders";
    let output = await getData(collection,query);
    res.send(output)
}
)

// // placeOrder
app.post('/placeOrders',async(req,res)=>{
    let data = req.body;
    let collection = "orders";
    console.log(">>>",data);
    let response = await postData(collection,data);
    res.send(response)
})
// menu details 
app.post('/menuDetails',async(req,res)=>{
    if(Array.isArray(req.body.id)){
        let query={menu_id:{$in:req.body.id}};
        let collection ="menu";
        let output = await getData(collection,query);
        res.send(output)
    }else
    {
        res.send("send the data in the form of array")
    }
})
//update details
app.put('/updateOrder',async(req,res)=>{
    let collection = "orders";
    let condition ={"_id":new Mongo.ObjectId(req.body._id)};
    let data =
    {
        $set :{
            "response":req.body.response
        }
    }
    let output = await updateOrder(collection,condition,data);
    res.send(output)
})


app.listen(port,(err) =>{
    dbConnect();
    getData();
    if(err) throw err;
    console.log(`server is running on the ${port}`)
}
)