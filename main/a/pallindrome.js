// function pallindrome(str){

//     for(let i=0,j=str.length-1; i<str.length;i++,j--){
//         console.log('str [i] :',str[i], 'str[j] :',str[j]);
//         if(str[i]!==str[j]){
//             return false
//         }
//     }
//     return true
// }

// let str='aba'
// console.log(pallindrome(str));


function reverse(str){

    let result = str.split(' ').reverse(' ').join(' ')
    return result
}

let str='hello world'
console.log(reverse(str));
