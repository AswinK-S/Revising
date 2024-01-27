
// print the array in this order

//  3 
//  1 1 1
//  2 2 2 2
//  4 4
//  1 1 1 1 1
//  5
//  6 6 6
//  3 3 3 3 3 3

let arr=[[3,1],[2,4],[1,5],[6,3]]
let n=0
let result =''
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        let n1=0
        if(j==0){
             n =arr[i][j+1]
        }else{
            n =arr[i][j-1]
        }
        while(n1<n){
            result +=arr[i][j]+''
            n1++
        }
        console.log(result);
        result=''
        
    }
}