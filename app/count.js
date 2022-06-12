exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    // debugger;
    console.log(start);
    let count = start;
    
    let tick = setInterval(function(){
      if (count < end){        
        count += 1;
        console.log(count);       
      }else{
        clearInterval(tick);
      }
    }, 100);

    return {cancel: function () { clearInterval(tick);}};
  } 
}
