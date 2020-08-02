//MINIFICAR

//Código do date minificado
!function(e,t){"use strict";let n=t.querySelector("#result");!function e(){let t=new Date,u=t.getHours(),o=t.getMinutes(),i=t.getSeconds();n.innerHTML=`${u}:${o}:${i}`,setTimeout(e,1e3)}()}(window,document);