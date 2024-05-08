
let b=document.querySelector("body")
b.style.backgroundImage="url(assets/service-2.jpg)"
b.style.backgroundRepeat="no-repeat"
b.style.backgroundSize="cover"
b.style.backgroundPosition="top"

//mydiv
let mydiv = document.getElementById("mydiv");
mydiv.style.display="flex"
mydiv.style.flexDirection="column"  
mydiv.style.border="1px solid grey"
mydiv.style.borderRadius="10px"
mydiv.style.padding="30px"
mydiv.style.backdropFilter="blur(5px)"
mydiv.style.backgroundColor="tansparent"

let btn=document.getElementById("btn")
btn.style.display="flex"
btn.style.justifyContent="center"
btn.style.margin="0px 100px"
btn.style.gap="40px"


//login
let login = document.getElementById("login")
login.style.display="flex"
login.style.flexDirection="column"

//signup
let signup = document.getElementById("signup")
signup.style.display="flex"
signup.style.flexDirection="column"

let tb1 =document.getElementById("toggle-body1")

let tb2 =document.getElementById("toggle-body2")
tb2.style.display="none"


let btn1 =document.getElementById("btn1")
btn1.style.padding="15px 40px"
btn1.style.border=" 2px solid rgb(79,122,221)"
btn1.style.fontSize="20px"
btn1.style.borderRadius="10px"
btn1.style.cursor="pointer"
btn1.style.backgroundColor="transparent"


let btn2 =document.getElementById("btn2")
btn2.style.padding="15px 40px"
btn2.style.fontSize="20px"
btn2.style.borderRadius="10px"
btn2.style.border="none"
btn2.style.cursor="pointer"
btn2.style.backgroundColor="transparent"
btn2.style.Color="rgb(226, 226, 226)"




btn1.addEventListener("click",()=>{
       tb2.style.display="none"
       tb1.style.display="block"
       btn1.style.color="rgb(79, 122, 221)"
       btn1.style.border=" 2px solid rgb(79,122,221)"
       btn2.style.color="none"
       btn2.style.border="none"
       btn2.style.color=" rgb(226, 226, 226)"
       
});

btn2.addEventListener("click",()=>{
    tb1.style.display="none"
    tb2.style.display="block"
    btn2.style.color="rgb(79, 122, 221)"
    btn2.style.border=" 2px solid rgb(79,122,221)"
    btn1.style.color="none"
    btn1.style.border="none"
    btn1.style.color=" rgb(226, 226, 226)"
});


let input=document.getElementsByClassName("input")
for (let i = 0; i < input.length; i++) {
   input[i].style.padding="10px" 
   input[i].style.fontSize="16px"
   input[i].style.borderRadius="50px"
   input[i].style.border="none"
   input[i].style.outline="none"
   input[i].style.backgroundColor= "rgb(231, 230, 230)";
}

let inputbtn= document.getElementsByClassName("input-btn")
for (let i = 0; i < inputbtn.length; i++) {
    inputbtn[i].style.backgroundColor="rgb(79, 122, 221)"
    inputbtn[i].style.borderColor="rgb(79, 122, 221)"
    inputbtn[i].style.fontSize="18px"
    inputbtn[i].style.cursor="pointer"
}

let label =document.getElementsByClassName("label")

for (let i = 0; i < label.length; i++) {
    label[i].style.fontSize="17px"
    label[i].style.color= "white";
    label[i].style.marginBottom= "5px";
}

