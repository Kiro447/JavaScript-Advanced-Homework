import textWrapper from './utilities.js'
let womenBtn = document.getElementById('womenBtn')

// function setData(key, data) {
//     let dataToSave = typeof data == 'object' ? JSON.stringify(data) : data
//     localStorage.setItem(key, dataToSave);
// }

// function getData(key) {
//     let dataToReturn;
//     dataToReturn = localStorage.getItem(key);
//     try {
//         dataToReturn = JSON.parse(dataToReturn)
//     }
//     catch (e) {
//         dataToReturn = dataToReturn;
//     };
//     return dataToReturn;
// }

// Categories men's clothing // jewelery /// electonics /// women's clothing
function filter(test) {
    let newArray = data.filter(x => x.category === test)
    console.log(newArray);
    return newArray;
}

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let newArray = data.filter (x => x.category === "women's clothing")
        let category = dataMapper(data)
        for (let element of data) {
            // filter("women's clothing")
            cardCreator(element)
            console.log(element.category);
        }

    })


function cardCreator(element) {
    let mainDiv = document.getElementById('mainDiv')
    let card = document.createElement('div');
    mainDiv.appendChild(card)
    card.classList = "container-main-card col-md-4 m-3"
    card.innerHTML = "";
    let { title, image, description, price } = element;
    description = textWrapper(description, 70)
    title = textWrapper(title, 20)
    card.innerHTML = `
    <div class="title card-title p-3">Title${title}</div>
    <div><img class="photo card-img-top px-3 mb-3" src="${image}"></div>
    <div id="desc" class="card-text m-3">${description}</div>
    <div class="price d-flex justify-content-center my-3">${price}$</div>
    `
}

function dataMapper(data,btn){
    let newArray = data.filter(x => x.category === btn.value)
    return newArray;
}



