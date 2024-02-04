app.use((err,req,res,next)=>{
    console.log(err)
    res.statusCode(500).json({err:'internal server error'})
})

