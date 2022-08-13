//TODO: get the data from server- means go to an endpoint
// fetch for API calls
const uri = 'http://localhost:3000/api/teddies/';
fetch(uri)
    .then((responce) => responce.json())
    .then((data) => createCards(data));

// After that I am using the recieved data to create View
function createCards(array) {
    const container = document.getElementById('container')
    const length = array.length;

    for (let i=0; i<length; i++) {
        const card = createCards(array[i]);
        container.appendChild(card);
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

}