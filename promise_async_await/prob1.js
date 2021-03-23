/*
 * Problems  
 * Make Promise 
 * Get data want to buy
 * Calc Price
 * Calc Bonus
 * Show Result
 */

const items = ["item1", "item2"]

const getPromise = new Promise((res,rej) => {
  let conditions = true
  if (conditions){
    res(items)
  }else {
    rej("Added on Items")
  }
})

getPromise.then((res) => {
  res.map((el) => {
      console.log(el );
    })
  })
  .catch(err =>{
    console.log(err);
  })

/*
const myPromise = new Promise((resolve, reject) => {  
  let condition = true  
  if(condition) {    
      resolve('Promise is resolved successfully.');  
  } else {    
      reject('Promise is rejected');  
  }
});

myPromise.then((res)=> {
  console.log(res);
}).catch((err) => {
  console.log(err);
})
*/