var none=document.getElementById("none");
 var no=document.getElementById("no");
 

no.addEventListener("click",function(){
none.style.opacity="1";
    // none.style.display="inherit";
})

var head=document.getElementById("head");
head.addEventListener("mousemove",function(){
    none.style.opacity="0";
})


