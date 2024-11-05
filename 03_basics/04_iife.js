// Immediately invoked function expressions (IIFE)
(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
    
})();

((name)=>{ // unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
    
})('hitesh')
 