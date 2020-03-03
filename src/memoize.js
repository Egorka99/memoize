export function memoize(fn) { 
    if (typeof fn === 'undefined' || typeof fn !== 'function') {
        return null;
    } 
    let cache = new Map(); 
    return (...args) => { 
      for(let key of cache.keys()) {
            console.log("Cache");
            if (compare(key,args)) {  
                return cache.get(key);  
            }  
        }
        console.log("Calculating");
        let result = fn(...args); 
        cache.set(args,result); 
        return result;  
    }   
  }  
       
function compare(a1, a2) { 
    return a1.length == a2.length && a1.every((v,i)=>v == a2[i])
}  
    
// var add = (n) => (n + 10); 
// var mult = (n,m) => (n * m);
// function sum() {
//     let result = 0;
//     for (var i = 0; i < arguments.length; i++) { 
//         result += arguments[i];
//     } 
//     return result;  
// } 
// //const memoizedAdd = memoize(add);
// //const memoizedMult = memoize(mult);
// const memoizedSum = memoize(sum); 
// // console.log(memoizedAdd(3));  // вычислено  
// // console.log(memoizedAdd(3));  // взято из кэша
// // console.log(memoizedAdd(4));  // вычислено 
// // console.log(memoizedAdd(4));  // взято из кэша 
// // console.log(memoizedMult(4,4));  // вычислено 
// // console.log(memoizedMult(4,4));  // взято из кэша 
// console.log(memoizedSum(1,2,3)); 
// console.log(memoizedSum(1,2,3));   