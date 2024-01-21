const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    const val = req.query.val
    console.log(val);
    let array=[]
    if(val){
        for(let i=0;i<=10;i++){
            array.push(i*val)
        }
        res.send(array)

    }else{
        res.send('there is no query')
    }

})

app.listen(3000,()=>{
    console.log(`listening to the port http://localhost:3000`);
})