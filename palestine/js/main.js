var one =document.getElementById("one");
var textOne =document.getElementById("textOne");
var two =document.getElementById("two");
var textTwo =document.getElementById("textTwo");
var pt1 =document.getElementById("pt1");
var pt2 =document.getElementById("pt2");
var three =document.getElementById("three");
var textThree =document.getElementById("textThree");
var pt3 =document.getElementById("pt3");
var four =document.getElementById("four");
var textFour =document.getElementById("textFour");
var pt4 =document.getElementById("pt4");
var mouse =document.getElementById("mouse");
one.addEventListener("click",function(){
textOne.style.display="inherit";
one.setAttribute("class","fa-solid fa-xmark");
pt1.classList.add("pt");

})
two.addEventListener("click",function(){
    textTwo.style.display="inherit";
    two.setAttribute("class","fa-solid fa-xmark");
    pt2.classList.add("pt");
})
three.addEventListener("click",function(){
    textThree.style.display="inherit";
    three.setAttribute("class","fa-solid fa-xmark");
    pt3.classList.add("pt");
})
four.addEventListener("click",function(){
    textFour.style.display="inherit";
    four.setAttribute("class","fa-solid fa-xmark");
    pt4.classList.add("pt");
})

document.addEventListener("mousemove",function(event){
    
    textOne.style.display="none";
    textTwo.style.display="none";
    textThree.style.display="none";
    textFour.style.display="none";
    one.setAttribute("class","fa-solid fa-plus");
    pt1.classList.remove("pt");
    two.setAttribute("class","fa-solid fa-plus");
    pt2.classList.remove("pt");
    three.setAttribute("class","fa-solid fa-plus");
    pt3.classList.remove("pt");
    four.setAttribute("class","fa-solid fa-plus");
    pt4.classList.remove("pt");
    mouse.style.position="fixed";
    mouse.style.top=`${event.clientY}px`;
    mouse.style.left=`${event.clientX}px`;
    
    console.log(event.clientX );
})

function y(w){
    console.log(w);
}