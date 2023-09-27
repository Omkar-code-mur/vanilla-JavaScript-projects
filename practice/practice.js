let p = new Promise((resolve,reject)=>{
    console.log("this is promise")
    reject(new Error("This is error"))
    // resolve(true)
})
p.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
});
// p.catch((error)=>{
//     console.log("error")
// })