// let http = require("http");

// let a = http.createServer((req,res)=>{
//     res.write("hi to  server")
//     res.end()
// })
// a.listen(2341)


// //http://localhost:2341/
// http://121.0.0.1:2341/

// change of text stop using cntrl c and strat again (runcode )

let http = require("http");

let a = http.createServer((req,res) => {
    res.write("hi  to http")
    res.end()
})
a.listen(1234)