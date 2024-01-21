let promise = new Promise((resolve,reject)=>{
    let num =101
    setTimeout(()=>{
        if(num%2==0){
            resolve('Even')
        }else{
            reject('Odd')
        }
    },2000)
})

promise.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})