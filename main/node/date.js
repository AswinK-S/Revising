const fs = require('fs')
const date = new Date()

let currentDate= date.toString()
console.log(currentDate);

fs.writeFile('date.txt',currentDate,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(currentDate);
    }
})