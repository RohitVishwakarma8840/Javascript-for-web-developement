// class in javascript 
// is a template code for creating objects so that you can create objects 


class ToyataCar{

    // constructor is a special method that is created when a new  object is 
    // created by calling new syntax automatically invoked by the compiler 

    constructor(brand,mileage){
        console.log("creating new objects");
        this.brand=brand;
        this.mileage=mileage;
    }
// whenever new objects are created constructor is invoked first 


start(){

    console.log("start");
}

stop(){
    console.log("stop");
}

// setbrand(brand){

//     this.brandName=brand;
//     this.brand=brand;  generally used this way 
// }

// setbrand(brand){

//     this.brand=brand;
//     // both brand are different this.brand is of object and brand is an argument 
// }

}

let fortuner=new ToyataCar("toyataCar",10); // constructor will be called automatically here 
// creating object from a class
// fortuner.setbrand("setcarasbrand");
let lexus=new ToyataCar();              // constructor will again be called here 
// creating another object from a class

// if we have not given a value in lexus then also we can give it after calling it like 



















