//promise

// const promise = new Promise((reject,resolve)=>{
//     if(7%2==0){
//         resolve('even')
//     }else{
//         reject('odd')
//     }
// })

// promise.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
// console.log(err);
// })


// Promise.all() => resolves only when all the promises are correct

// const promise = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//     if(7%2==0){
//         resolve('even')
//     }else{
//         reject('odd')
//     }
//    },2000)
// })

// const promise1 =new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     if(6%2==0){
//         resolve('even9')
//     }else{
//         reject('odd9')
//     }
//   },4000)
// })

// Promise.all([promise,promise1]).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
// console.log(err,"errrr");
// })


// Promise.any() => returns if any of the promise resolves


// const promise = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//     if(7%2==0){
//         resolve('even')
//     }else{
//         reject('odd')
//     }
//    },2000)
// })

// const promise1 =new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     if(6%2==0){
//         resolve('even9')
//     }else{
//         reject('odd9')
//     }
//   },4000)
// })

// Promise.any([promise,promise1]).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
// console.log(err,"errrr");
// })


// Promise.race() => retrun the result which is executing first

// const promise = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//     if(7%2==0){
//         resolve('even')
//     }else{
//         reject('odd')
//     }
//    },2000)
// })

// const promise1 =new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     if(6%2==0){
//         resolve('even9')
//     }else{
//         reject('odd9')
//     }
//   },4000)
// })

// Promise.race([promise,promise1]).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
// console.log(err,"errrr");
// })

// Promise.allSettled() =>  it returns all the results as an array of  object, 

// const promise = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//     if(7%2==0){
//         resolve('even')
//     }else{
//         reject('odd')
//     }
//    },2000)
// })

// const promise1 =new Promise((resolve,reject)=>{ 
//   setTimeout(()=>{
//     if(6%2==0){
//         resolve('even9')
//     }else{
//         reject('odd9')
//     }
//   },4000)
// })

// Promise.allSettled([promise,promise1]).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
// console.log(err,"errrr");
// })

