const{resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    getProduct,
    updateProduct,
    lista,
    id}=require('./product')

beforeEach(() => {
    resetProducts();
});
describe('reset Products',()=>{
    it("null", () => {
        expect(resetProducts()).toBeNull();
        })
    })


describe('addProduct', () => {
    it('should throw an error if price is NaN', () => {
        expect(() => addProduct('leche', 'b')).toThrow('The price must be a number');
    });
    
    it('should throw an error if name or price are missing', () => {
         expect(() => addProduct('',3)).toThrow('Name and Price are required');
    });
    
    it('should throw an error if price is less than or equal to 0', () => {
        expect(() => addProduct('leche', -20)).toThrow('Are you sure that the price is equal to or less than 0?');
    });
    
    it('should add a product', () => {
        expect(addProduct('leche', 1)).toEqual([{ id: 1, name: 'leche', price: 1 }]);
    });
});

describe('Remove Product',()=>{
    it('should throw a error if lista doesn"t contain the id',()=>{
        expect(()=> removeProduct(4)).toThrow("Don't found this id");
    })
    it('should remove the  element of the array with that id',()=>{
        addProduct('Product 1', 1)
        addProduct('Product 2', 2)
        addProduct('Product 3', 3)
        expect(removeProduct(1)).not.toContainEqual({ id: 1, name: 'Product 1',price:1 })
    })
})

describe('Get all products', () => {
    it('should throw an error if the list is empty', () => {
        expect(() => getProducts(lista)).toThrow("The list is empty");
    });
   
    it('should return the complete list of products', () => {
        addProduct('Product 1', 1)
       
        expect(getProducts()).toEqual([{id:1,name:'Product 1',price:1}]);
    });
});

describe('return a element',()=>{
    it('should throw an error if the list is empty', () => {
        expect(() => getProduct(1)).toThrow("Didn't find this id");
    });
   
    it('should return the complete list of products', () => {
        addProduct('Product 1', 1)
        expect(getProduct(1)).toEqual({ id: 1, name: 'Product 1', price: 1 })
    });

})

describe('Update Product', () => {
    beforeEach(() => {
        resetProducts();
    });

    it('should throw an error if the list is empty', () => {
        expect(() => updateProduct()).toThrow('Products list empty!');
    });

    it('should throw an error if the id doesn"t exist in the list', () => {
        addProduct('Product 1', 1);
        expect(() => updateProduct(2)).toThrow("This product doesn't exist");
    });

    it('should throw an error if name or price is not provided', () => {
        addProduct('Product 1', 1);
        expect(() => updateProduct(1)).toThrow('Name or price required');
    });

    it('should update the product with the provided id', () => {
        addProduct('Product 1', 1);
        expect(updateProduct(1, 'Product 2', 2)).toEqual([{ id: 1, name: 'Product 2', price: 2 }]);
    });
});