// GA Ticket: price_1MF6w3A1869aNZSewqBrWimT
// Midnight: price_1MF6xWA1869aNZSe8Iddql1g
// Day 1: price_1MOCQJA1869aNZSe1mR8RuUl
// if creating new product, use the API product keys above the id
const productsArray = [
    {
        id: "price_1MOCQJA1869aNZSe1mR8RuUl",
        title: "Day 1 Admission ",
        description: "Day 1 session - Chamber v7",
        image: "/images/hyperbolic-time-chamber-dbz.jpeg",
        price: 100.00
    },
    {
        id: "price_1MF6xWA1869aNZSe8Iddql1g",
        title: "'Midnight' [Chamber]",
        description: "Day 2 midnight - Chamber v7",
        image: "/images/midnight.png",
        price: 50.00
    },
    {
        id: "price_1MF6w3A1869aNZSewqBrWimT",
        title: "General Admission ",
        description: "Full 2 day pass to Chamber v7",
        image: "/images/front.png",
        price: 150.00
    }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    // edge case if product is does not exist.
    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }
    return productData;
}

export { productsArray, getProductData }