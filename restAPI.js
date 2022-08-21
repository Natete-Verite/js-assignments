fetch ('http://localhost:5000/products')
.then(function (response) {
    return response.json();
    })
    .then(function (info) {
    console.log( info);
    let prod = document.getElementById('products');
    info.forEach (item => {
        let i = document.createElement('li')
        i.innerText = `${item.name}`
        prod.appendChild(i)
    })
    })
    .catch(function (error) {
    console.log('error', error);
    });

fetch ('http://localhost:5000/products/fruits')
.then(function (response) {
    return response.json();
     })
    .then(function (inform) {
    console.log( inform);
    let fru = document.getElementById('fruList');
    inform.forEach (item => {
        let j = document.createElement('li')
        j.innerText = `${item.name}`
        fru.appendChild(j)
        })
        })
    .catch(function (error) {
    console.log('error', error);
    });

fetch ('http://localhost:5000/products/vegetables')
.then(function (response) {
    return response.json();
        })
    .then(function (information) {
    console.log( information);
    let veg = document.getElementById('vegList');
    information.forEach (item => {
        let k = document.createElement('li')
        k.innerText = `${item.name}`
        veg.appendChild(k)
        })
        })
    .catch(function (error) {
    console.log('error', error);
    });