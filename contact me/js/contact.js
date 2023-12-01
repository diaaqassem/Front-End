var frame=document.getElementById("frame1");

var num=Number(frame.innerHTML)
function valueOfNum(){
    num++;
    frame.innerHTML=num+"%";
    if(num==99){
        clearInterval(stop);
    }
}
var stop=setInterval(valueOfNum,60);



var frame2=document.getElementById("frame2");

var num2=Number(frame2.innerHTML)
function valueOfNum2(){
    num2++;
    frame2.innerHTML=num2+"%";
    if(num2==99){
        clearInterval(stop2);
    }
}
var stop2=setInterval(valueOfNum2,60);


var frame3=document.getElementById("frame3");

var num3=Number(frame3.innerHTML)
function valueOfNum3(){
    num3++;
    frame3.innerHTML=num3+"%";
    if(num3==99){
        clearInterval(stop3);
    }
}
var stop3=setInterval(valueOfNum3,60);


var frame4=document.getElementById("frame4");

var num4=Number(frame4.innerHTML)
function valueOfNum4(){
    num4++;
    frame4.innerHTML=num4+"%";
    if(num4==50){
        clearInterval(stop4);
    }
}
var stop4=setInterval(valueOfNum4,100);