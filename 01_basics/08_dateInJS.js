let myDate=new Date()
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let createdDate = new Date(2023,0,23);
// let createdDate = new Date(2023,0,23,5,3);
let createdDate = new Date("01-14-2023");
// console.log(createdDate.toLocaleString());
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(createdDate.getTime());

// console.log(Math.floor(Date.now()/1000));



let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleDateString('default',{
    weekday: "long",
});
console.log(newDate);
