let gameseq = [];
let userseq = [];

let gamestart = false ;
let level = 0;

let btns = ["red" , "yellow" , "green" , "purple"];
let h3 = document.querySelector("h3");

document.addEventListener("keypress" , function () {
   if(gamestart == false) {
    console.log("Game has started");
    gamestart = true;
     lvlup();
   }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}


function lvlup() {
    userseq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randidx = Math.floor(Math.random () * 3 );
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    // console.log(randidx);
    // console.log(randcolor);
    // console.log(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);

    gameflash(randbtn);
}

function checkans(idx) {
    // let idx = level-1;

    if(userseq[idx] === gameseq[idx]) {
        if(userseq.length == gameseq.length) {
            // lvlup();
            setTimeout(lvlup ,1000);
        }
    } else {
     h3.innerHTML = `Game over ! Your score was <b>${level}</br> Press any key to start again`;
     document.querySelector("body").style.backgroundColor = "red";
     setTimeout( function () {
     document.querySelector("body").style.backgroundColor = "white";

     },150);
     reset();
    }
}

function btnpress() {
    let btn = this;
    // console.log(this);
    userflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    // console.log(userseq);

    checkans( userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn) {
    btn.addEventListener("click" , btnpress);
}

function reset() {
    gamestart = false;
    gameseq = [];
    userseq = [];
    level = 0;
 }