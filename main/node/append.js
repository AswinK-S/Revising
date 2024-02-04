const fs = require('fs')


let data =[]

for(let i=0;i<=10;i++){
data.push(i*10)
}

fs.appendFile('date.txt',data.join('\n'),'utf-8',(err)=>{
    if(err){
        console.log(err.message);
    }else{
       console.log(data);
    }
})