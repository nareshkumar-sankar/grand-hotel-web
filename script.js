let count1 =1
let count2 =2

let room=document.getElementById("room")
let r_count=document.getElementById("r-count")
let m_count=document.getElementById("m-count")

let r_btn1 =document.getElementById("r-btn1")
r_btn1.addEventListener("click",()=>{
    if (count1>=1) {
        r_count.textContent=--count1
    }
})


let r_btn2 =document.getElementById("r-btn2")
r_btn2.addEventListener("click",()=>{
   r_count.textContent=++count1
})


let m_btn1 =document.getElementById("m-btn1")
m_btn1.addEventListener("click",()=>{
    if (count2>=1) {
        m_count.textContent=--count2
    }
})


let m_btn2 =document.getElementById("m-btn2")
m_btn2.addEventListener("click",()=>{
   m_count.textContent=++count2
})