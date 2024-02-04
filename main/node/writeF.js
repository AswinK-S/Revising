const fs= require('fs')

let data = 'writeFile using node'

fs.writeFile('index.html',data,(err)=>{
    if(err){
        console.log(err);
    }
})

fs.readFile('index.html','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})

let data1 = '\n this is through fs.appendFile'

fs.appendFile('index.html',data1,'utf-8',(err)=>{
    if(err){
        console.log(object);
    }else{
        console.log(data);
    }
})