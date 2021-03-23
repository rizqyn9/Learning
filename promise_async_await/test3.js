
let timeOutPromise = (message, interval) => {
    let result = new Promise((res, rej)=> {
        if(message == '' || typeof message !== 'string'){
            rej("Input Your message!!")
        }if (interval < 0 || typeof interval !== 'number'){
            rej("Set Interval dengan angka")
        }else{
            setTimeout(()=>{
                res(message)
            },interval)
        }
    })
    return result
}

timeOutPromise('Hello there!', 1000)
.then(message => {
   alert(message);
})
.catch(e => {
  console.log('Error: ' + e);
});