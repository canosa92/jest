let lista=[];
let id=0

function resetProducts(){
    lista=[];
    id=0
    return null
}
function addProduct(name, price) {
    if (isNaN(price)) {
        throw new Error('The price must be a number');
    } if (!name || !price) {
        throw new Error('Name and Price are required');
    } if (price <= 0) {
        throw new Error('Are you sure that the price is equal to or less than 0?');
    } 
        id =id +1;
        const product = { id: id, name: name, price: price };
        lista.push(product);
        return lista;
    }

    function removeProduct(idRemove) {
        const index = lista.findIndex(item => item.id === idRemove);
        if (index === -1) {
            throw new Error("Don't found this id");
        }
        lista.splice(index, 1);
        return lista;
    }

function getProducts(){
    if (lista.length == 0) {
        throw new Error("The list is empty");
    } else {
        return lista;
    }
 }

 function getProduct(idRemove) {
    let elemento = lista.find(item => item.id === idRemove);
    if (!elemento) {
        throw new Error("Didn't find this id");
    };
    return elemento;
}
function updateProduct(id, name, price) {
    let element = lista.find(item => item.id === id);
    if (lista.length == 0) {
        throw new Error('Products list empty!');
    }
    if (!element) {
        throw new Error("This product doesn't exist");
    }
    if (!name && !price) {
        throw new Error('Name or price required');
    }

    if (name && price) {
        element.name = name;
        element.price = price;
        return lista; 
    }
};
module.exports={
    resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    resetProducts,
    getProduct,
    updateProduct,
    lista,
    id
}