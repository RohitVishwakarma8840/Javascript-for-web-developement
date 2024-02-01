function fun(x,fn){
// here function has a two parameters one is x and the other is callback function 
// which will be then invoked 
for( i=0;i<x;i++){i

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