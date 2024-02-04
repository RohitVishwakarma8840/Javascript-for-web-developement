function a(name){
  return function b(){

console.log(name);

  }
}

let x=a("rohit");
console.log(x);
x();