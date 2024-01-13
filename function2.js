let arr=[22,28 , 32];

// for(let i=0;i<arr.length;i++){
//     console.log("the value of array is ",arr[i]);
// }

// arr.forEach(function printvalue(value,index){

//     console.log("the value is ",value," and the index is ",index);
// })

arr.forEach((val,index)=>{
    console.log(val , " and the index is ",index);
});

let arr1=["delhi","pune","mumbai"];

arr1.forEach((num,idx,arr1)=>{
    console.log(num.toUpperCase(),"  and the index is ",idx," ",arr1);
});


let arr2=[1,2,3];
arr2.forEach((ans,index)=>{

    console.log(ans*ans," is the square of value at index ",index);
});


let array=[1,2,3];

let newarray=array.map((value)=>{
return value*value;
}); 

console.log(newarray);

let arrz=[2,3,4,5,6,7,8];

let newarrz=arrz.filter((valz)=>{
    return valz % 2===0; // value >3 value <1 etc are the examples of it 

});

console.log("the new array formed is ",newarrz);

let marks=[80,55,97,94,98];

let newmarks=marks.filter((markval)=>{
    return markval>80;
})

console.log("the number of students are ", newmarks);

// reduce the array 

let user=[1,2,3,4,5];

let newuser=user.reduce((prev,curr)=>{
    return prev*curr;
})

console.log("the value which we have calculated is  ",newuser);

let highest=user.reduce((prev1,curr1)=>{

    return prev1>curr1 ? prev1: curr1;
})

console.log(highest);