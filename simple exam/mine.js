var ans1 = document.getElementById('ans1');
var v1 = document.getElementById('v1');
var b1 =document.getElementById('b1');
var next1=document.getElementById('next1')
var next2=document.getElementById('next2')

var go1=document.getElementById('go1');
var go2=document.getElementById('go2');
var ok1=document.getElementById('ok1');
var ok2=document.getElementById('ok2');
var ok4=document.getElementById('ok4');
var ok3=document.getElementById('ok3');
var que1=document.getElementById('que1');
var que2=document.getElementById('que2');
var b1=document.getElementById('b1');
var v2=document.getElementById('v2');



b1.addEventListener('click', function () {
    var a= prompt("enter your answer : ");
    var nameRegex =/^[0-9]{1,7}$/;

    var x =Number(a);
  
    console.log(typeof (x));
    v1.innerHTML = x;
    if (x === 9) {
        v1.style.color = 'blue';
        b1.style.backgroundColor='rgb(62, 255, 62)'
        b1.style.color='white'
        next1.removeAttribute('disabled')
        next1.style.backgroundColor='#007cff';
        next1.style.transform='scale(1.1)';
        next1.style.color='white';
        b1.setAttribute('disabled',1)
   
        go1.style.color='white';
        v1.innerHTML = 9;
        ok1.style.animation='moving   6s   alternate'
        ok2.style.animation='moving   6s   alternate'
        v1.innerHTML = '9';

    }else if(nameRegex.test(x) ){
    
        b1.style.backgroundColor='red'
        v1.style.color = 'red';
        setTimeout(error, 1000)
        setTimeout(() => {
            v1.innerHTML = '';
        }, 3000);}
    else if (x != 9) {
        window.alert('Please Enter number')
        v1.innerHTML=''
    
    }
})
function error() {
    window.alert('Please Try Again Youe Answer Incorrect');
}
next1.addEventListener('click',function(){
que1.style.display='none'
que2.style.display='inherit'
})

b2.addEventListener('click', function () {

    var nameRegey =/^[0-9]{1,7}$/;
    var b= prompt("enter y[our answer : ");
    var y =Number(b)
  
    console.log(typeof (y));
    v2.innerHTML = y;
    if (y === 60) {
        v2.style.color = 'blue';
        b2.style.backgroundColor='rgb(62, 255, 62)'
        b2.style.color='white'
        next2.removeAttribute('disabled')
        next2.style.backgroundColor='#007cff';
        next2.style.transform='scale(1.1)';
        next2.style.color='white';
      
        b2.setAttribute('disabled',1)
        go2.style.color='white';
        v2.innerHTML = 60;
        ok4.style.animation='moving   6s   alternate'
        ok3.style.animation='moving   6s   alternate'

    }else if(nameRegey.test(y) ){
    v2.innerHTML=y;
        b2.style.backgroundColor='red';
        v2.style.color = 'red';
        setTimeout(error, 1000)
        setTimeout(() => {
            v2.innerHTML = '';
        }, 3000);}
    else if (y != 60) {
        window.alert('Please Enter number')
        v2.innerHTML=''
    
    }
})
function error() {
    window.alert('Please Try Again Youe Answer Incorrect');
}
var result2=[1,1]; 
var sum=0;
function getResult(){
    for(i=0;i<=arguments.length;i++){
        sum+=arguments[i];


    }
   
}
// getResult(result2);
// console.log(sum)
go2.addEventListener('click',function(){
    alert("congratulation👨‍🎓👨‍🎓 : "+2+' /2')
})

// var arr=[56,5,3,8,1,2,9]
// arr.sort();
// console.log(arr)