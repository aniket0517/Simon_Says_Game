let gameseq = [];
let userseq = [];

let btns = ["yellow","red","green","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function levelUp(){
    userseq = [];
    level++;
    h2.innerHTML = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randcolor = btns[randIdx];
    let randBtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);

    btnFlash(randBtn);
}

function checkAns(idx){
   if(userseq[idx] === gameseq[idx]){
    if(userseq.length == gameseq.length){
        setTimeout(levelUp, 1000);
    }
   }
   else{
    h2.innerHTML = `Game Over! Your Score Was <b>${level}</b> Press Any Key To Start Otherwise Click Start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
   }
}

function btnPress(){
    console.log(this);
    let btn = this;
    btnFlash(btn);

    usercolor = btn.getAttribute("id");
    // console.log(usercolor);
    userseq.push(usercolor);

    checkAns(userseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

function myFunction() {
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
}