

// TODO get the data (array) from backend API 'http://localhost:3000/api/products/'
fetch('http://localhost:3000/api/products')
    .then(data => {
        return data.json();
    })
    .then(products => {
        insertProducts(products); // promise function for the right order of request
    });

// TODO get the existing element on the page where I can insert cards - section tag
const productHolder = document.getElementById('items');
//console.log(productHolder);

function insertProducts(products) {
    // console.log(products);

    // TODO iterate over the data that came from the backend API (one by one)
    for (let i = 0; i < products.length; i++) {
        //      AND inside this iteration get the current element in the array (one item)
        const product = products[i];
        console.log(product);
        //      AND create new card DOM element which will be inserted into the home page
        const productElement = document.createElement('product'); // this element has two attributes:id and class
        productElement.setAttribute('id', product.id);
        productElement.classList.add('product');
        //      AND insert current element's info into new card DOM element
        productElement.innerHTML = `
        <a href="./product.html?identifier=${product.id}">
            <article>
              <img src="${product.imageUrl}" alt="${product.name}">
              <h3 class="productName">${product.name}</h3>
              <p class="productDescription">${product.description}</p>
            </article>
          </a>
        `
        //      AND append (child) this new card DOM element to existing element on page (section tag)
        productHolder.appendChild(productElement);
    }
}
















// TODO: get the data (array) from server- means go to an endpoint
// fetch for API calls
/*const uri = 'http://localhost:3000/api/products/';
fetch(uri)
    .then((responce) => responce.json())
    .then((data) => console.log(data)); 
    

const uri = 'http://localhost:3000/api/products/';
const singleLink = './single-product.html'

fetch(uri)
    .then((responce) => responce.json())
    .then((data) => createCards(data));

// After that I am using the recieved data to create View
function createCards(array) {
    const iteams = document.getElementById('items')
    const length = array.length;

    for (let i=0; i<length; i++) {
        const card = createUniqueCards(array[i]);
        iteams.appendChild(card);
    }
}

function createCards(obj) {
    const card = document.createElement('section');
//create elements
    const img = document.createElement('img');
    const name = document.createElement('h2');
    const price = document.createElement('p');
    const link = document.createElement('a');
    link.setAttribute('href', obj);
//create content for these elements by creating classes (50:45min Video1 CSS)
    card.classList.add('card');

    name.innerHTML = obj.name;
    price.innerText = obj.price;

    img.setAttribute('src', obj.imageUrl) //imageUrl from json file

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);

    return card;

} */
