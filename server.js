const http = require("http")

const server = http.createServer((req,res)=>{
if(req.url==="/"){
    res.end("home page")
}else if(req.url === "/about"){
    res.end("about page")
}else if(req.url === "/contact"){
    res.end("conatct page")
}else{
    res.end(
        '<h1>oops page not found</h1>'
    )
}
});

server.listen(5000, ()=>{
    console.log("server conected with port 5000")
})

