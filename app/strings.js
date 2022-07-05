exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    console.log(str, amount);
    const strOUT = [...str];
    console.log(strOUT);
    console.log(strOUT.join(''));

    // strOUT.forEach((item)=>{
    //   console.log(item);

    // })
    // debugger;
    let i=0;
    const res = strOUT.map((item, pos)=>{
      
      if ((strOUT[pos]===item)&&(i<1)){
        i++;
        return item;
      }
      
    })

    console.log(res);
    // console.log(...strOUT);
    // let count=0;
    // let strOut;

    // for(let i = 0; i<str.length; i++){
    //   console.log('for1', str[i]);
  
    //   for(let a = i; a<str.length; a++){
        
    //     if (str[a]==str[i]){
    //       console.log('for2', str[a]);
    //     }
        
    //   }
    //   // count=0;
    // }
  },

  wordWrap: function(str, cols) {
    // const output = [];
    // let acc = '';

    // const words = str.split(' ');

    // for (let i = 0; i < words.length; i += 1) {
    //   const word = words[i];

    //   if (!acc.length) {
    //     acc += word;
    //   } else if (`${acc} ${word}`.length > cols) {
    //     output.push(acc);
    //     acc = word;
    //   } else {
    //     acc += ` ${word}`;
    //   }
    //   if (i === words.length - 1) {
    //     output.push(acc);
    //   }
    // }
    // console.log(output.join('\n'));
    // return output.join('\n');
  },

  reverseString: function(str) {

  }
};
