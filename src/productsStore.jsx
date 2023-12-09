

const productsArray = [
    {
        id: "price_1OEzKKHqZ5Teucv2Jlr3A7kt",
        title: "Gold",
        price: 2000
    },
    {
        id: "price_1OEzKzHqZ5Teucv2rUuWrpps",
        title: "Silver ",
        price: 899
    },
    {
        id: "price_1OEz4VHqZ5Teucv2H6IvFwpm",
        title: "Rose ",
        price: 1500
    },

];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };