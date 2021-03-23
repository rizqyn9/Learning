console.log("Start")

setTimeout(()=> {
  console.log("TimeOut")
},0)

Promise.resolve('Promise!').then(res=> console.log(res))

console.log('end')
