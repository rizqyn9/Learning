// let promise = fetch('coffee.jpg');

// let promise2 = promise.then((response) => {
//     if(!response.ok){
//         throw new Error('HTTP ERROR')
//     }else{
//         return response.blob()
//     }
// })

// let promise3 = promise2.then((myBlob) => {
//     let objectURL = URL.createObjectURL(myBlob);
//     let image = document.createElement('img');
//     image.src = objectURL;
//     document.body.appendChild(image)
//})



fetch('coffee.jpg')
    .then(res => {
        if(!res.ok){
            throw new Error("HTTPS ERRO")
        }else{
            return res.blob()
        }
    }).then(res => {
        let objectURL = URL.createObjectURL(res)
        let image = document.createElement('img')
        image.src = objectURL
        document.body.appendChild(image)
    }).catch( err => {
        console.error(err);
    })