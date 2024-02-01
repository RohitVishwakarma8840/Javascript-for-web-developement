function mapper (arr,fn){

    let result=[];
for(let i=0;i<arr.length;i++){

    

 let res=fn(arr[i],i);
   result.push(res);
}
return result;
}

let arr=[1,2,3,4,5];

let x=mapper(arr,function cubes(v,i){

console.log(v,i,v*v*v);
return v*v*v;
} );


console.log(arr,x);