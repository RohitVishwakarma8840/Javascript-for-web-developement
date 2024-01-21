// class in javascript 

class ToyataCar{

    constructor(brand){
        console.log("creating new objects");
        this.brand=brand;
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
// }

// setbrand(brand){

//     this.brand=brand;
//     // both brand are different this.brand is of object and brand is an argument 
// }

}

let fortuner=new ToyataCar("toyataCar");
// creating object from a class
// fortuner.setbrand("setcarasbrand");
let lexus=new ToyataCar();



















