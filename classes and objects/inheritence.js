// inheritence is passing down of properties and methods from 
// parent class to a child class
// class parent{

// }

// class child extends parents{


// }

// class Parent{
// hello(){
//     console.log("say hello");
// }

// }

// class child extends Parent{

// }


// let obj=new child();

// class person {

// constructor(){
//     this.species="homo sapiens";  // constructor is a special type of method invoked when objects are created ;
// }

// eat(){
//     console.log("eat ");
// }

// sleep(){
//     console.log("sleep ");
// }

// Work(){

//     console.log("do nothing ");
// }
// // it will be overrided if called by a object of class having its own method 


// }

// class engineer extends person{
// work(){
//     console.log("solve problems, build something ");
// }

// }

// let rohit=new engineer();

// class doctor extends person{
//     work(){
//         console.log("treats patient ");
//     }
// }

// let aman=new doctor();



// SUPER Keyword 

class person{
constructor(){
    console.log("enter parent constructor ");
    this.species="homo sapiens";
}
eat(){
    console.log("eat the food");
}
}

class engineer extends person{
constructor(branch){
    console.log("enter child constructor ");
    super();  // to invoke parent class constructor 
    this.branch=branch;
    console.log("exit child constructor ");
}

work(){
console.log("solves the problem ,");

}
}

// let engObj =new engineer();  will throw an error so do CALL SUPER CONSTRUCTOR BEFORE ACCESSING THIS
let engObj=new engineer("chemical engineer");










