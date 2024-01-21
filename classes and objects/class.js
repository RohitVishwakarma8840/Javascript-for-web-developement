// object a javascript is a object having some entity and behaviour
// js objects has special property called prototype which are also objects 


// const student={
// fullname:"rohit vishwakarma",
// marks:94.4,

// printMarks: function (){
 
 
//     console.log("the marks are", this.marks); // this.marks means student.marks
// }

// };
// let arr=["mango","apple","banana"]; arr is also a object which has its own property and method inside it 
// prototype are some methods in js and objects inherit that 

const employee={
calcTax(){
    console.log("the tax rate is 10%");
}

};

const karanArjun={
   salary:50000,
};

const karanArjun2={
    salary:50000,
 };

 const karanArjun3={
    salary:50000,
 };

// setting prototype and prototype are a refrence to an object 
karanArjun.__proto__=employee;
karanArjun2.__proto__=employee;

karanArjun3.__proto__=employee;

//  used to set a prototype in js so that methods can be used in javascript 

const karanArjun4={
   salary:50000,
   calcTax(){

      console.log("the tax is 20%");
   }
};

karanArjun4.__proto__=employee;
// in that case the object uses its own function apart from that the other prototype function





















