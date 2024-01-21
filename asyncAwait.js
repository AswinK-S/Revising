async function test(data){
    let result = await awaitFun(data)
    console.log(result);
}

let data=3
test(data)

function awaitFun(value){
   return result =new Promise((resolve)=>{
        setTimeout(()=>{
            let sum= value+value
            resolve(sum)
        },2000)
    })
   
}