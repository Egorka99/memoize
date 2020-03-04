export function memoize(fn) { 
    if (typeof fn === 'undefined' || typeof fn !== 'function' || fn == '{ }') {
        return null;
    } 
    let cache = new Map();  
    return (...args) => { 
      for (let key of cache.keys()) {
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
    