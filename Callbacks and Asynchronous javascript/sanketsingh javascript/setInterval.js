let id= setInterval(function execute(){
    console.log("hello rohit");
},3000);


setTimeout(function stop(){

    clearInterval(id);


},13000);