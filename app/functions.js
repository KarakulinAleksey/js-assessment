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

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};

//**************** */
// const auto = {
//   brand: 'BMW',
//   drive(){
//     return `заведем наш ${this.brand}`;
//   }
// }

//*************** */

// const autoDrive = auto.drive.bind(auto);

// const funX = function(q,w){
//   return q+w;
// }
// console.log(funX);
// console.log(funX(2,3));

//***************** */

/*const f1 = function(arr, fn) {
  const result = [];

  // for (let i = 0; i < arr.length; i += 1) {
  //   // console.log(arr[i]);
  //   const currentElem = arr[i];
  //   result.push(function() {
  //     // console.log(fn(currentElem));
  //     return fn(arr[i]);
  //   });
  // }
  arr.forEach(element => {
    result.push(function() {
      // console.log(fn(currentElem));
      return fn(element);
    });
  });
  // console.log(result);
  return result;
}

var arr = [ Math.random(), Math.random(), Math.random(), Math.random() ];
var square = function (x) { return x * x; };
// f1(arr, square);
const f2 = f1(arr, square);
// console.log(f1(arr, square));
console.log(f2);
console.log(f2[0]());
console.log(f2[1]());
console.log(f2[2]());
console.log(f2[3]());*/


// function demo(a,b,c){
//   return (`${a}' '${b}' '${c}`);
// }
// let partiaal = functionsAnswers.partial();
// console.log(partiaal);