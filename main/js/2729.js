var isFascinating = function(n) {
    let num=n+''
    let j=2
    let r=0
    let set =new Set()
    console.log('type of num :',typeof num);
    for(let i=0;num.length<9;i++){
        r=n*j
        num=num+r
        r=0
        j++
       
    }

    for(let i=0;i<num.length;i++){
        if(!set.has(num[i])){
            set.add(num[i])
        }else{
            return false
        }
    }
    console.log(set);
    if(set.size==9 && !set.has('0')){
        return true
    }else{
        return false
    }
};

let n = 783
console.log(isFascinating(n));



