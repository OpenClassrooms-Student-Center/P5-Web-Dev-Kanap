fetch('http://localhost:3000/api/products/')
.then(response => response.json())
.then(products => {
    const productSection = document.getElementById( 'items')

    for (let i = 0; i < products.length; i++) {
        const product = products[i]
        const link = document.createElement('a')
        const article = document.createElement('article')
        const img = document.createElement('img')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')

        link.setAttribute('href', './product.html?id=' + product._i)
        img.setAttribute('src', product.imageURL)
        img.setAttribute('alt', product.altTxt)
        h3.setAttribute('class', 'productName')
        p.setAttribute('class', 'productDescription')

        h3.textContent = product.name
        p.textContent = product.description

        productSection.appendChild(link)
        link.appendChild(article)
        article.append(img, h3, p)
    }
})