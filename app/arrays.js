exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    // console.log(arr.indexOf(item));
    return (arr.indexOf(item));
  },


  sum: function(arr) {
    let sum = 0;
    //  for (let i=0; i<arr.length; i++){
    //   console.log(`${sum} + ${arr[i]}`);
    //   sum = sum + arr[i];
    // }
    for (let val of arr){
      // console.log(`${sum1} + ${val}`);
      sum = sum + val;
    }
    return sum;
  },

  remove: function(arr, item) {
    const arrFilter = arr.filter((itemArry)=>{
      return itemArry!==item;
    })
    // console.log(arrFilter);
    return arrFilter;
  },

  removeWithoutCopy: function(arr, item) {
   for (let i=0; i<=arr.length; i++){
    if (arr[i]==item){
      arr.splice(i, 1);
      i = i - 1;
    }
  }
     // console.log(arr);
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    // console.log(arr);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    // console.log(arr);
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    // console.log(arr);
    return arr;
  },

  curtail: function(arr) {
    arr.shift(arr);
    // console.log(arr);
    return arr;
  },

  concat: function(arr1, arr2) {
    // console.log(arr1.concat(arr2));
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    // debugger;
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
      if (arr[i]==item){
        sum = sum + 1;
      }
    }
    // console.log(sum);
    return sum;
  },

  duplicates: function(arr) {
    // debugger;
    console.log(arr);
    let arr2 = [];
    for (let i=arr.length-1; i>=0; i--){
      // console.log(arr[i]);
      arr.splice(i, 1);
      console.log(arr);
      for (let s=arr.length-1; s>=0; s--){
        // console.log(arr[i-1]);
        console.log(arr[s]);
        if (arr[s]==arr[i-1]){
          arr2.push(arr[i-1]);
        }
      }
      
    }
    console.log(arr2);
    // return arr2;
  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
