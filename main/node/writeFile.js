const fs = require('fs')

let data = []
for(let i=0;i<=10;i++){
data.push(i*10)
}

fs.writeFile('multiplication.txt',data.toString(),(err)=>{
    if(err){
        console.log(err.message)
    }else{
       

        console.log('completed',data);
    }
    

    
})

