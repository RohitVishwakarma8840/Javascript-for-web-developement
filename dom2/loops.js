// for(let i=1;i<=5;i=i+1){

//     console.log("hello rohit");
// }

// // for(let val of strval) or arrval instead of strval
//  let str="rohitcoder";
// let size=0;
//  for(let i of str){
//     console.log("the value of i is ", i);
//     size++;
//  }

// console.log("the value of size is ",size);

let student={

name:"rohit",
age:20,
branch:"cs",
isPass:true
};

// console.log(student.name);
// console.log(student.age);
// console.log(student.branch);

// // for in loop for object valid only for these 
// for(let key in student){
//     console.log(key);
// } // it returns key or you can say that i  in objects and is valid for objects only 


for(let key in student){

    console.log(key," value= ", student[key]);
}





