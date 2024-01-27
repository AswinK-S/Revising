const http = require('http')
const server = http.createServer()  

server.on('request',(req,res)=>{
    res.statusCode =200
    res.setHeader('Content-Type','text/plain')
    res.end('node server using http.createServer')
})

server.listen(2000,()=>{
console.log('connecting to server ');
})