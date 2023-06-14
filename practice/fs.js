let a = require("fs")
//write//
// a.writeFile("myfile","im learning js",function(){
//     console.log("file created")
// })
//appendusingsamefile//
// a.appendFile("myfile","im learning express \n",function(){
//     console.log("fileappended")
// }
// )
//appendusing//.
// a.appendFile("mycode.txt","im learning express \n",function(){
//     console.log("fileappended")
// }
// )
//read//
// a.readFile("mycode.txt","utf-8",(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// }
// )
//renaming the file name without param
// a.rename("myfil1e","mydatafile",()=>{
//     console.log("file renamed")
// })
////renaming the file name with param
// a.rename("myfil1e","mydatafile",(err)=>{
//          if (err) throw err;
//          console.log("file renamed")
// })
// a.rename("myfine","myfile",(err)=>{
//     if (err) throw err;
//     console.log("file renamed")
// })
a.unlink("myfile",(err)=>{
    if(err) throw err;
    console.log("file deleted")
})




