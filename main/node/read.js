const fs = require('fs')

fs.readFile('date.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log('read',data);
    }
})
