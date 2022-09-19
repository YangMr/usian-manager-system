const http = require("http")

const server = http.createServer((req,res)=>{
    res.end("hello wrold vue")
})

server.listen(3000)