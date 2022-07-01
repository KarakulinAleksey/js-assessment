exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    // console.log(num.toString(2));
    // console.log('1000'[0]);
    const strBit = num.toString(2);
    // console.log(strBit);
    return (num.toString(2)[bit]);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    // console.log(num.toString(2).padStart(8, '0'));
    return num.toString(2).padStart(8, '0');
  },

  multiply: function(a, b) {
    const arr = [...b.toString()];
    console.log(arr);
    
    for (let i = arr.length; i >=0; i--){
      console.log(arr[i]);
      let summ;
      if (arr[i]==='.'){
        summ++;
        return ;
      }
    
    }
    console.log('summ',summ);
    const val = a * b;
    return (Number(val.toFixed(5)));
    
  }
};
