import textWrapper from './utilities.js'
let first = 'https://fakestoreapi.com/products'
window.onload = function() {
    getSavedStoreData("");
};

function cardCreator(element) {
    let mainDiv = document.getElementById('mainDiv')
    let card = document.createElement('div');
    mainDiv.appendChild(card)
    card.classList = "container-main-card col-md-4 m-3"
    card.innerHTML = "";
    let { title, image, description, price } = element;
    let rate = element.rating.rate;
    console.log(rate);
    description = textWrapper(description, 70)
    title = textWrapper(title, 20)
    card.innerHTML = `
    <div class="title card-title p-3">Title${title}</div>
    <div><img class="photo card-img-top px-3 mb-3" src="${image}"></div>
    <div id="desc" class="card-text m-3">${description}</div>
    <div class="price d-flex justify-content-center my-3">${price}$ ${rate}\u2B50</div>
    `
}

async function getStoreData() {
    const preloadedData = sessionStorage.getItem('storeData');

    if (!preloadedData) {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/`);
            const data = await response.json();
            sessionStorage.setItem('storeData', JSON.stringify(data));
            return data;
        } catch (e) {
            console.log('Fetch error with getStoreData()');
        }
    } else {
        return JSON.parse(preloadedData);
    }
}

async function getSavedStoreData(category) {
    document.getElementById("mainDiv").innerHTML = "";
    const storeData = await getStoreData();
    console.log(storeData);
    if(category === ""){
        for (let element of storeData){
            cardCreator(element)
        }
    }else{
    const filteredData = storeData.filter(x => x.category == category);
    for (let key in filteredData) {
        let elements = filteredData[key];
        cardCreator(elements);
    }}
}

// event listeners

let homeBtn = document.getElementById('homeBtn')
let menBtn = document.getElementById('menBtn')
let jewelBtn = document.getElementById('jewelBtn')
let elecBtn = document.getElementById('elecBtn')
let womenBtn = document.getElementById('womenBtn')

menBtn.addEventListener('click', () => {
    getSavedStoreData("men's clothing");
});
jewelBtn.addEventListener('click', () => {
    console.log('jewel Btn is clicked');
    getSavedStoreData("jewelery");
});
womenBtn.addEventListener('click', () => {
    getSavedStoreData("women's clothing");
});
elecBtn.addEventListener('click', () => {
    getSavedStoreData("electronics");
});
homeBtn.addEventListener('click', () => {
    getSavedStoreData("");
});
