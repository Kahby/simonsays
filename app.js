// const object = {
//     message: 'Hello, World!',
//     logMessage() {              // Method to log the message
//         console.log(this.message);
//     }
// };

// setTimeout(object.logMessage(), 1000);

// [1,2,3,4,5,6,7,999.8,9,100].reduce((max,el)=>{
//     if(max>el){
//         return max
//     }
//     else{
//         return el
//     }
// })


// let para=document.createElement('p');
// para.innerText="Hey I,am Red";
// document.querySelector("body").append(para);
// para.classList.add("red");
// console.dir(para);


// let heading=document.createElement("h3");
// heading.innerText="I am Blue";
// document.querySelector("body").append(heading);
// heading.classList.add("blue");

// let div=document.createElement("div");
// let heading1=document.createElement("h1");
// let para1=document.createElement("p");
// heading1.innerText="i am a div";
// para1.innerText="Mee too";
// div.appendChild(heading1);
// div.appendChild(para1);
// div.classList.add("bgc");
// document.querySelector("body").append(div);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum=(arr)=>{
//     let sum=0;
    
//     for(let i =0;i<arr.length;i++){
//         arr[i]=(arr[i])**2;
//         sum=sum+arr[i];
//     }
//     let avg=sum/(arr.length);
//     console.log(sum);
//     console.log(avg);
// }

// let btn=document.querySelector("button");
// function randomclr(){
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);
//     let color=`rgb(${red},${green},${blue})`;
//     return color;
// }
// btn.addEventListener("click",function(){
//     let h3=document.querySelector("h3");
//     let random=randomclr();
//     h3.innerText=random;
//     let div=document.querySelector("div");
//     div.style.backgroundColor=random;
//     console.log(random);
// });

// let inp=document.querySelector("input");
// inp.addEventListener("keydown",function(event){
//     console.log("code=",event.code);
//     if(event.code=="KeyW"){
//         console.log("UP");
//     }
//     if(event.code=="KeyA"){
//         console.log("lft");
//     }
//     if(event.code=="KeyD"){
//         console.log("down");
//     }
//     if(event.code=="KeyS"){
//         console.log("Back");
//     }
// })
// let btn = document.querySelector("button");
// let inp = document.querySelector("input");
// let ul = document.querySelector("ul");

// btn.addEventListener("click", function() {
//   // Create a new li element
//   let li = document.createElement("li");
//   let dele=document.createElement("button");
//   dele.innerText="delete";

//   // Set the text content of the li to the input value
//   li.innerText = inp.value;
//   li.appendChild(dele);
//   // Append the li to the ul
//   ul.appendChild(li);
//   // Clear the input field
//   inp.value = "";
// });
// let del=document.querySelectorAll(".del");
// for(delbtn of del){
//     delbtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     })
// }
let gameseq=[];
let plyrseq=[];
let btns=["yellow","red","green","purple"];
let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelup();
    }
})
function btnflash(btnn){
    btnn.classList.add("flash");
    setTimeout(function(){
        btnn.classList.remove("flash")
    },500);
}
function usrflash(btnn){
    btnn.classList.add("flashh");
    setTimeout(function(){
        btnn.classList.remove("flashh")
    },100);
}
function levelup(){
    plyrseq=[];
    h2.innerText=`Level ${level}`;
    level++;
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    console.log(randbtn);    //.?? kyun hai
    btnflash(randbtn);
    gameseq.push(randColor);
    
}
function btnPress(){
    console.log(this);
    let btn=this;
    usrflash(btn);
    UserColor=btn.getAttribute("id");
    plyrseq.push(UserColor);
    checkAns(plyrseq.length-1);
}
function checkAns(idx){
    
    if(plyrseq[idx]===gameseq[idx]){
        if(plyrseq.length==gameseq.length){
            levelup();
        }
        
    }else{
        h2.innerText=`Game over Your Score Was ${level-1} press any key to start`;
        reset();
    }
    
    
}

let allBtns=document.querySelectorAll(".btn");
    for (btn of allBtns){
        btn.addEventListener("click",btnPress)
    }
function reset(){
    started=false;
    plyrseq=[];
    gameseq=[];
    level=0;
}
// let allBtns=document.querySelectorAll(".btn");   //kya galat haiii
//     for (btn of allBtns){
//         btn.addEventListener("click",function(){
//             plyrseq.push(btn.getAttribute("id"));
//         });
//     }



