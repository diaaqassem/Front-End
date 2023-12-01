 var nameproduct=document.getElementById("ProductName");
var priceproduct=document.getElementById("ProductPrice");
var descriptionproduct=document.getElementById("ProductDescription");
var Add=document.getElementById("Add");
// var productlist=[];
if(localStorage.getItem("productdata")==null){
    var productlist=[];
}else{
    var productlist=JSON.parse(localStorage.getItem("productdata"));
}
displayproducts();


function disabled(){
        if( priceproduct.value==null && descriptionproduct.value==null) {
         Add.setAttribute("disabled","true");
         alerta.classList.remove("d-none");
    } 

}
Add.addEventListener("click",disabled);
function addproduct(){
    
    if(regularName()== true && regularPrice()== true   &&  regulardesc()==true &&  nameproduct.value!="" && priceproduct.value!="" && descriptionproduct.value!=""){
    var product={
        name:nameproduct.value,
        price:priceproduct.value,
        description:descriptionproduct.value

    }
    productlist.push(product);
    localStorage.setItem("productdata" , JSON.stringify(productlist));
    console.log(productlist);
    displayproducts();
    clearall();}
  
    // if(nameproduct.value=="" && priceproduct.value=="" && descriptionproduct.value=="") {
    //      Add.setAttribute("disabled","true");
    // } 

    else{
        Add.setAttribute("disabled","true");
    }

}



function displayproducts(){
    var trs="";
    for(var i=0;i<productlist.length;i++){
        trs += `<tr><td>${i+1}</td><td>${productlist[i].name}</td><td>${productlist[i].price}</td><td>${productlist[i].description}</td> <td><button style="color:#ffffff;font-family:Viner Hand ITC; background-color:red;" class="btn  text-white btn-sm" onclick="deete(${i});">Delete</button></td>
        <td><button style="color:#ffffff;font-family:Viner Hand ITC;" class="btn text-white btn-info btn-sm" onclick="update(${i});">Update</button></td></tr> `
    }
// console.log(trs);
document.getElementById("tbody").innerHTML=trs;
}


function deete(x){
   productlist.splice(x,1);
   localStorage.setItem("productdata" , JSON.stringify(productlist));
    displayproducts();
}



var searchinput=document.getElementById("searchinput");


function search(){
    var str="";
    for(var i=0;i<productlist.length;i++){
        if(productlist[i].name.toLowerCase().includes(searchinput.value.toLowerCase()) ){
           str += `<tr><td>${i+1}</td><td>${productlist[i].name.toLowerCase().replace(searchinput.value,`<span style='background-color:yellow;'>${searchinput.value}</span>`)}</td><td>${productlist[i].price}</td><td>${productlist[i].description}</td> <td><button style="color:#ffffff;font-family:Viner Hand ITC; background-color:red;" class="btn  text-white btn-sm" onclick="deete(${i});">Delete</button></td>
           <td><button style="color:#ffffff;font-family:Viner Hand ITC;" class="btn text-white btn-info btn-sm" onclick="update(${i});">Update</button></td></tr> `;
        }
     
    }

    document.getElementById("tbody").innerHTML=str;
}



//    update

var addbtn=document.getElementById("Add");

function update(d){
    nameproduct.value=productlist[d].name;
    priceproduct.value=productlist[d].price;
    descriptionproduct.value=productlist[d].description;

    addbtn.innerHTML="Update Product";
    addbtn.onclick=function(){
        productlist[d].name=nameproduct.value;
        productlist[d].price=priceproduct.value;
        productlist[d].description=descriptionproduct.value;
        localStorage.setItem("productdata" , JSON.stringify(productlist));
        displayproducts();
        addbtn.innerHTML="Add";
        addbtn.onclick=addproduct;
    clearall();
    };};


        // ************************** clear
        function clearall(){
         nameproduct.value="";
         priceproduct.value="";
         descriptionproduct.value="";
        }











        // alert regularForNmae
var alerta=document.getElementById("alert");
        function regularName(){
            var nameRegex =/^[A-Z][a-z 0-9]{3,15}$/;
            var nameValue=nameproduct.value;
            if(nameRegex.test(nameValue)){
                nameproduct.classList.remove("is-invalid");
                nameproduct.classList.add("is-valid");
                alerta.classList.add("d-none");
            Add.removeAttribute("disabled");
                return true;
                
            }
            else{
                nameproduct.classList.add("is-invalid");
                alerta.classList.remove("d-none");
                Add.setAttribute("disabled","true");
                return false;
            }
            
        }
        nameproduct.addEventListener("keyup",regularName);

// 
var alertp=document.getElementById("alertp");

        function regularPrice(){
            var priceRegex =/^[0-9]{3,7}$/;
            var nameValue=priceproduct.value;
            if(priceRegex.test(nameValue)){
                priceproduct.classList.remove("is-invalid");
                priceproduct.classList.add("is-valid");
                alertp.classList.add("d-none");
            Add.removeAttribute("disabled");
                return true;
                
            }
            else{
                priceproduct.classList.add("is-invalid");
                alertp.classList.remove("d-none");
                Add.setAttribute("disabled","true");
                return false;
            }
            
        }
        priceproduct.addEventListener("keyup",regularPrice);











        // 
        var alertc=document.getElementById("alertc");

        function regulardesc(){
            var priceRegex =/^[A-Z][a-z 0-9]{3,15}$/;
            var nameValue=descriptionproduct.value;
            if(priceRegex.test(nameValue)){
                descriptionproduct.classList.remove("is-invalid");
                descriptionproduct.classList.add("is-valid");
                alertc.classList.add("d-none");
            Add.removeAttribute("disabled");
                return true;
                
            }
            else{
                descriptionproduct.classList.add("is-invalid");
                alertc.classList.remove("d-none");
                Add.setAttribute("disabled","true");
                return false;
            }
            
        }
        descriptionproduct.addEventListener("keyup",regulardesc);





        let message=function(){
            alert(656);
        }
      