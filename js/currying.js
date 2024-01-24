// let v={a:3,b:2}
// console.log(v['b']);
// console.log(0==' ');
// console.log(1=='1');
// console.log(0=='1');


// Curried version of the function
function curryAdd(x) {
    return function(y) {
      return function(z) {
        return x + y + z;
      };
    };
  }
  
  // Using the curried function
  const curriedAdd = curryAdd(1)(5)(6)
  console.log(curriedAdd);