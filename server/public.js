const http = require("http")

const server = http.createServer((req,res)=>{
    res.end("hello wrold vue3")
})

server.listen(4000)
