//DATE

(function(window, document){
  "use strict";

  let result = document.querySelector("#result")
  function clock(){
    let date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    result.innerHTML= `${hour}:${minutes}:${seconds}`
    setTimeout(clock,1000)
  }
  clock()
})(window, document)
