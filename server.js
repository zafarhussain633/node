const http = require("http")

const server = http.createServer((req,res)=>{
console.log("it will run two times")  //
if(req.url==="/"){
    res.end("home page")
}else if(req.url === "/about"){
    res.end("about page")
}else if(req.url === "/contact"){
     for(let i=0; i<1000; i++){
        console.log(i,"blocking code ")
     }
    res.end("conatct page") // it will send response after above loop run
}else{
    res.end(
        '<h1>oops page not found</h1>'
    )
}
});

// for(let i=0; i<10000; i++){ // this is blocking code it will block next code
//     console.log(i)
// }

server.listen(5000, ()=>{
    console.log("server conected with port 5000") 
})

