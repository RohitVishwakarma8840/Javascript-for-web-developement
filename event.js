let btn1=document.querySelector("#btn1");
// btn1.onclick=(e)=>{

// console.log("btn was clicked this time ");
// let a=26;
// a++;
// console.log(a);
// console.log(e);
// console.log(e.type);
// console.log("to check for printing ");
// console.log(e.clientX,e.clientY);

// }

// div=document.querySelector("div");
// div.onmouseover=(evt)=>{

// console.log("you are inside the div");
// console.log(evt.type);
// console.log(evt);
// console.log(evt.clientX,evt.clienY);
// }

// btn1.addEventListener("click",()=>{
// console.log("printed by event listner ");
// console.log("the button was clicked");
// });

// const handler2=()=>{
//     console.log("printed by event listner 2 ");
//     console.log("the button was clicked 2 of event handler");
//     };


// btn1.addEventListener("click",handler2);

let btn2=document.querySelector(".mode");
let theme="default";

btn2.addEventListener("click",()=>{

    if(theme==="default"){
        theme="dark";
      console.log("dark");
      document.body.style.backgroundColor="black";

    }
    else{
        theme="default";
   console.log("default");
   document.body.style.backgroundColor="white";
   console.log("light");
    }
});







