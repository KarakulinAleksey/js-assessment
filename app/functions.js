exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    
    // console.log(...arr);
    return fn(...arr);
  },

  speak: function(fn, obj) {
    const fn2 = fn.bind(obj);
    return fn2();
  },

  functionFunction: function(str) {
    return (argFunction) => `${str}, ${argFunction}`;
  },

  makeClosures: function(arr, fn) {
    const result = [];

    // for (let i = 0; i < arr.length; i += 1) {
    //   const currentElem = arr[i];
    //   result.push(function() {
    //     return fn(currentElem);
    //   });
    // }
    arr.forEach(element => {
      result.push(function() {
        return fn(element);
      });
    });

    return result;
  },

  partial: function(fn, str1, str2) {
    // console.log(fn);
    // console.log(str1);
    // console.log(str2);
    // console.log(fn(str1,str2));
    // console.log(function(str3){
    //   fn(str1, str2, str3);
    // });
    return (str3)=>fn(str1, str2, str3);
   
   
  },

  useArguments: function(...parm) {
    const sum = parm.reduce((prVal, item)=>{
      return prVal+item;
    })
    // console.log(sum);
    return sum;
;  },

  callIt: function(fn, ...parm) {
    // console.log(fn);
    // console.log(parm);
    // console.log(...parm);
    return fn(...parm);
  },

  partialUsingArguments: function(fn, ...arg) {
   
    return  (...parm)=>{
      setArr = [...arg, ...parm];
      return fn(...setArr);
    };
  },

  curryIt: function(fn) {
    // return (a)=>(b)=>(c)=>fn(a, b, c);

    // console.log(a);
    return function(a){

      return function(b){
        return function(c){
         return fn(a,b,c);
        }
      }
    }
  }
};

/*const generate = function(f){
  return function(arg){
    return f(f(arg));
  }
}

const fnSquare = function(a){
  return a * 2;
}

// const f1 = generate (Math.sqrt);

console.log(generate);
console.log(generate (fnSquare)(4));
// console.log(f1(2));*/