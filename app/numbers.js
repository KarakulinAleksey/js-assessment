exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    const arrBit = [...num.toString(2)];
    // console.log(arrBit);
    for (let i = arrBit.length-1; i>=0; i--){
      // console.log(arrBit[i])
      if (i==arrBit.length-bit){
        // console.log(arrBit[arrBit.length-bit]);
        return Number(arrBit[arrBit.length-bit]);
      }
    }
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    // console.log(num.toString(2).padStart(8, '0'));
    return num.toString(2).padStart(8, '0');
  },

  multiply: function(a, b) {
    // debugger;
    const arr = [...b.toString()];
    // console.log(arr);
    let summ = 0;
    function arrSchet(){
      for (let i = arr.length - 1; i >=0; i--){
        if (arr[i]==='.'){
          return summ;
        }
        // console.log('for', arr[i]);
        summ++;
      }
    }
   
    // console.log('summ',arrSchet());
    const val = a * b;
    return (Number(val.toFixed(arrSchet())));
    
  }
};
