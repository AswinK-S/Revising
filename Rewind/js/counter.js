// counter using setInterval
let data = 1

let counter =setInterval(()=>{
    if(data >5){
        clearInterval(counter)
    }
console.log('setInterval counter :',data++);
},1000)

//counter using setTimeout
for( let i=0;i<=5;i++){
    setTimeout(()=>{
        console.log('setTimeOUt timer :',i)
    },1000*i)
}
console.log('/n');