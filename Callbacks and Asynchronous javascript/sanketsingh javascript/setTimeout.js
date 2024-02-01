setTimeout(function execute(){

    console.log("task completed ");
},3000);

let id2=setTimeout(function execute2(){
    console.log("task 2 being executed ");
},5000);

console.log(id2);
clearTimeout(id2);