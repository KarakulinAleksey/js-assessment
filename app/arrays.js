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
    let flag;
    let lastElement = 0;
    let arr2 = [];
    for (let i = 0; i<arr.length; i++){
      lastElement = arr[arr.length-1];
      arr.pop();
      i = i - 1;
      for (let item = 0; item < arr.length; item++){
        if (lastElement == arr[item]){
          arr.splice(item, 1);
          const s = arr2.some((item)=>{
            return item == lastElement;
          });
          if (!s){
            arr2.push(lastElement);
          }
          item = item - 1;
        }
      }
    }
    // console.log(arr2);
    return(arr2);
  },

  square: function(arr) {
    
    arr.forEach((element, i) => {
      let itemSquare = 0;
      // console.log(element, i);
      itemSquare = element * element;
      arr.splice(i, 1, itemSquare);
    });
    // console.log(arr);
    return arr;
  },

  findAllOccurrences: function(arr, target) {
    const arr2 = [];
    for (let i=0; i<arr.length; i++){
      if (arr[i]==target){
        arr2.push(i);
      }
    }
    // console.log(arr2);
    return arr2;
  }

};

// function binSeach(valZad){
//   const arr1 = [];
//   for (let i=0; i<100; i++){
//     arr1[i]=i;
//   }
//   console.log(arr1);

//   let low=0;
//   let high=arr1.length-1;
//   let mid=0;
  
//   val=0;

//   while (low<=high){
//     mid=Math.floor((low+high)/2);
//     val=arr1[mid];
//     console.log(mid,val); 
//     if (val==valZad){
//       return val;
//     }
//     if (val>valZad){
//       high=mid-1;
//     }else{
//       low=mid+1;
//     }
   
//   }
//   return undefined;
// }

// console.log(binSeach(13));