// let myName  = "ayush     "
// let myChannel = "chai       "
// console.log(myName.trueLength);

// let myHeroes = ["thor","spiderman"]

// let heroPower = {
//     thor:"hammer",
//     spiderman:"sling",

//     getspiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
        
//     }
// }
// Object.prototype.hitesh = function(){
//     console.log(`hitesh is present in all objects`);
    
// }
// Array.prototype.ayush = function (){
//     console.log("ayush says hello");
    
// }


// // heroPower.hitesh()
// myHeroes.hitesh()
// myHeroes.ayush()
// // heroPower.ayush()

// //inheritance 
// const user ={
//     name:"chai",email:"chai@google.com"
// }
// const teacher ={
//     makeVideo : true
// }
// const teachingSupport = {
//     isAvailable: false
// }
// const TASupport ={
//     makeAssignment : 'JS assignment',
//     fullTime: true ,
//     __proto__:teachingSupport
// }
// teacher.__proto__ = user  //old way to add proto

// //modern syntax

// Object.setPrototypeOf(teachingSupport,teacher)

let anotherUsername = "chaiaurcode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is :${this.trim().length}`);
    
    
    
}
anotherUsername.trueLength()

"hitesh".trueLength()
"icetea".trueLength()