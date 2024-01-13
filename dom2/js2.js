let div=document.querySelector("div");
console.dir(div);

let heading =document.querySelector("h1");
console.dir(heading);

// in browser heading.innerHTML="<i> new heading </i>"

// heading.textContent will show hidden content also 

// changing content of divs 
let divs=document.querySelectorAll(".box");
console.log(divs);
console.log(divs[0]);
console.log(divs[1]);

divs[0].innerText="new unique value";
divs[1].innerText="NEW UNIQUE VALUE AGAIN ";

