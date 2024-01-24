console.log('first execution')

setImmediate(()=>{
    console.log('execution after the eventloop cycle');
})

console.log('next');