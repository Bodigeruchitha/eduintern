// let http= require("http");
// let fs= require("fs");
// let port=2367;

// let server=http.createServer((req,res)=>{
//     fs.readFile("myloc.json","utf-8",(err,data)=>{
//         if (err) throw err;
//         res.write(data);
//         res.end()
//     })
// })
// server.listen(port)


let http=require("http");
 let fs= require("fs");
 let port= 3454;

let server = http.createServer((req,res) =>{ 
    fs.readFile("location starbucks.json","utf-8",(err,data)=>{
        if (err) throw err;
        res.write(data);
        res.end()
        })
}) 
server.listen(port)
