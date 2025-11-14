function counter(){
    var score=0
var h1=document.querySelector("h1")
document.querySelector(".increase").addEventListener("click",()=>{
    score+=1
    h1.textContent=`${score}`
    
})
document.querySelector(".decrease").addEventListener("click",()=>{
    score-=1
    h1.textContent=`${score}`
    
})
}

counter()