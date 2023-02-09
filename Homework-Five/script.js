import textWrapper from './utilities.js'
let fetchUrl = 'https://fakestoreapi.com/products'
window.onload = function () {
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
    description = textWrapper(description, 70)
    title = textWrapper(title, 20)

    card.innerHTML = `
    <div class="title card-title p-3">Title${title}</div>
    <div><img class="photo card-img-top px-3 mb-3" src="${image}"></div>
    <div id="desc" class="card-text m-3">${description}</div>

    <div class="d-flex justify-content-between align-items-center">
        <div class="price m-3">${price}$ </div>
        <button class="btn btn-success mx-1 addToCart" id="addCart">Add to Cart</button>
        <div class="m-3"> ${rate} \u2B50 </div>
    </div>
    `
}

async function getStoreData() {
    const preloadedData = sessionStorage.getItem('storeData');

    if (!preloadedData) {
        try {
            const response = await fetch(fetchUrl);
            const data = await response.json();
            sessionStorage.setItem('storeData', JSON.stringify(data));
            return data;
        } catch (e) {
            console.log('Error fetch');
        }
    } else {
        return JSON.parse(preloadedData);
    }
}

async function getSavedStoreData(category) {
    document.getElementById("mainDiv").innerHTML = "";
    const storeData = await getStoreData();
    if (category === "") {
        for (let element of storeData) {
            // console.log(element);
            cardCreator(element)
        }
    } else {
        const filteredData = storeData.filter(x => x.category == category);
        for (let element of filteredData) {
            console.log(element);
            cardCreator(element);
        }
    }
}



const allProductsBtn = document.getElementById('allProductsBtn')
const menBtn = document.getElementById('menBtn')
const jewelBtn = document.getElementById('jewelBtn')
const elecBtn = document.getElementById('elecBtn')
const womenBtn = document.getElementById('womenBtn')


//  frla nekoj error u shoppingCart ako otidam linkot  script.js:98 Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')at script.js:98:20 ako ne gi stavam site u IF

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


allProductsBtn.addEventListener('click', () => {
    getSavedStoreData("");
});
let displayTotalPrice = document.getElementById("totalPriceDisplay")


let addedItems = [];
let totalPrice = 0;

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('addToCart')) {
        let item = {
            title: event.target.parentElement.previousElementSibling.textContent,
            price: event.target.previousElementSibling.textContent,
            image: event.target.parentElement.previousElementSibling.previousElementSibling.firstChild.src
        };
        addedItems.push(item);
        totalPrice += parseFloat(item.price.substring(0, item.price.length - 2));
        console.log(displayTotalPrice);
        displayTotalPrice.innerHTML = `Total price: ${totalPrice}`;
        cartExpand();
    } else if (event.target.classList.contains('removeBtn')) {
        let removedItem = event.target.parentElement;
        let removedItemPrice = parseFloat(removedItem.querySelector('#cartPrices').textContent);
        totalPrice -= removedItemPrice;
        totalPrice = totalPrice < 0.2 ? 0 : totalPrice // bagira neso okolu 0 koa e
        displayTotalPrice.innerHTML = `Total price: ${totalPrice}`;
        removedItem.remove();
    }
});

let mainCart = document.getElementById('mainCart');

function cartExpand() {
    let cartContent = document.createElement('div');
    cartContent.classList = 'cartContent d-flex justify-content-around';
    mainCart.appendChild(cartContent);
    for (let i = 0; i < addedItems.length; i++) {
        let item = addedItems[i];
        let { price, title, image } = item;
        price = price.substring(0, price.length - 2);
        price = parseFloat(price);
        cartContent.innerHTML = `
        <div class="cartTitle align-center" id="cartTitle">${title}</div>
        <div  id="cartImages"><img class="cartImages" src="${image}"></div>
        <div class="cartPrices" id="cartPrices">${price}</div>
        <button class="btn btn-danger removeBtn">Remove</button>
        `;
    }
}

