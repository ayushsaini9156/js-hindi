const coding = ["js","ruby","python","java","cpp"]
// coding.forEach(function (item){
//     console.log(item);
    
// })

// coding.forEach((item)=>{
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)
 
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
} )

const myCoding = [
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageFileName);
    
})