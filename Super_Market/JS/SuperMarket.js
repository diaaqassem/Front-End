var a=document.querySelector(".moon");
var b=document.body;

var none=document.getElementById("non");
var no=document.getElementById("noo");


no.addEventListener("click",function(){
  none.style.opacity="1";
})

var head=document.getElementById("head");
head.addEventListener("mousemove",function(){
    none.style.opacity="0";
})


a.addEventListener("click",function(){
 var r= Math.round(Math.random()/1);
//   var g= Math.round(Math.random()*0);
//   var x= Math.round(Math.random()*1);


  
  b.style.backgroundColor = `rgba(0,0,0,${r})`;

})
//  var n=document.querySelector(".contact2");
//  n.addEventListener("mousemove",function(){
//   var r= Math.round(Math.random()/1);
//    var g= Math.round(Math.random()*50);
//    var x= Math.round(Math.random()*100);
 
 
//    console.log(r);
//    n.style.backgroundImage = `linear-gradient(45deg,rgb(0, 174, 255) ${x}%,rgb(121, 121, 121) ${r}%,white ${g}%)`;
 
//  })



 

