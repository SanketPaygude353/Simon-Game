let userSeq=[];
let gameSeq=[];

let buttons=["red","yellow","green","purple"];
let start=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",()=>{
    if(start==false)
    {
        console.log("Game is started");
        start=true;
        levelup();
    }
    
})

function btnFlash(btn){
    btn.classList.add("flash");
   setTimeout(function() {
    btn.classList.remove("flash");
   },250)
}

function levelup(){
    level++;
    userSeq=[];
    h2.innerText=`Level ${level}`;

    //Random Color Genearator
    let randomIdx=Math.floor(Math.random()*3);
    let randomColor=buttons[randomIdx];
    let raBtn=document.querySelector(`.${randomColor}`)
    gameSeq.push(randomColor);
    console.log(gameSeq);
    btnFlash(raBtn);
}

function checkAns(idx){

if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length)
    {
        setTimeout(levelup,1000);
    }
} else{
        h2.innerHTML=`Game over! Your Score is <b> ${level*10}<b> <br>Press any key to restart the game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
     }


}
function btnpress(){
    let btn=this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn")
for(btn of allBtns)
{
    btn.addEventListener("click",btnpress)
}
function reset(){
     userSeq=[];
     gameSeq=[];
     start=false;
     level=0;
}