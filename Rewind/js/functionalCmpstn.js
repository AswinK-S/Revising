//functional composition---------------------------------

function compose(mult,add){
    return function(x){
        return (mult(add(x)))
    }
}

let add = x=>x+2
let mult = x=>x*x
let result = compose(mult,add)
console.log('functional composition :',result(5))

//closure-----------------------------------------------

function closure(x){
     let b=10;
    return function sum(){
        let c=8
      return  function mult(){
          return  x*b+c
        }
     }
}

let result2 = closure(5)
console.log('closure :',result2()());

//partial application-----------------------------

function partlApplctn(a,b,c){
    a=a===null?0:a;
    return a+b+c
}

let result3  =  partlApplctn.bind(null,null,3)
let result4 = result3(7,5)
let result5  =  result3(9)
console.log('partial application result5:',result5);
console.log('partial application result4:',result4);

//immediately invoked function (IIFE)

(function(){
    console.log('IIFE 1st');
    var a = 10;

    (function(){
        a = 20;
        console.log(a);

        (function(){
            var b = 5;
            console.log('iife ++a', ++a);
        })();
    })();
})();
