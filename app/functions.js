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
 //
  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {

  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};

// const auto = {
//   brand: 'BMW',
//   drive(){
//     return `заведем наш ${this.brand}`;
//   }
// }

// const autoDrive = auto.drive.bind(auto);



