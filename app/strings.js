exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    // console.log(str, amount);
    // let count=0;
    // for(let i = 0; i<str.length; i++){
    //   console.log(str[i]);
    //   for(let a=0; a<str.length; a++){
        
    //     if (str[i]==str[a]){
    //       console.log(count++);
    //     }
        
    //   }
    //   count=0;
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
