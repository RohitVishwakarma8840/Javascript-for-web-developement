function fun(x,fn){
// here function has a two parameters one is x and the other is callback function 
// which will be then invoked 
for(let  i=0;i<x;i++){ 

    console.log(i);
}

fn();
}

// fun(5,()=>{
//     console.log("custom logger");
// });

fun(5,function log(){
    console.log("custom logger ");
});

// <--- different ways to pass callback function --->
 
// fun(10,function (){
//     console.log("anonomous logger");   // anonomous function another way to pass callbaack function 

// })

function gun(){
    console.log("gun function");
}

fun(2,gun);

let z=function  (){
console.log("zebra");
}
fun(1,z);