const express = require('express')
const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.set('views','./views')

app.get('/',(req,res)=>{
    res.render('page2')
})

app.post('/submit',(req,res)=>{
    console.log('submit');
    let data=req.body
    let d=parseInt(data.textData)
    console.log(typeof(d));
    if(isNaN(d)){
        let result = 'not a number'
        res.render('page',{result})
    }else{
        result ='is nmber'
        res.render('page',{result})
    }
    
})

app.get('/home',(req,res)=>{
res.render('page')
})

const port=3000

app.listen(port,()=>{
    console.log(`server running on port http://localhost:${3000}`);
})