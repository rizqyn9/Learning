
function fetchNdecode (url,decode){
    return fetch(url).then(res => {
            if(!res.ok){
                console.error(`${res.status}`);
            }else{
                if(decode == "text"){
                    return res.text();
                }if(decode == "blob"){
                    return res.blob()
                }
            }
        }).catch(err => {
            console.log(`There has been a problem with your fetch operation for resource "${url}": ` + err.message);
        })
}

let coffee = fetchNdecode('coffee.jpg', 'blob');
let tea = fetchNdecode('tea.jpg', 'blob');
let description = fetchNdecode('desc.txt', 'text');

Promise.all([coffee, tea, description]).then(values => {
    console.log(values);
    values.map(el => {
        if(el.type =="image/jpeg"){
            let objectURL = URL.createObjectURL(el)
            let image = document.createElement('img')
            image.src = objectURL
            return document.body.appendChild(image)
        }
        else{
            let para = document.createElement('p')
            para.textContent = el
            return document.body.appendChild(para)
        }
        
    })

    // let para = document.createElement('p');
    // para.textContent = descText;
    // document.body.appendChild(para);
});
console.log("ok");
