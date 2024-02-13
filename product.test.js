const{resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    getProduct,
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
        const updatedLista = addProduct('leche', 1);
        expect(updatedLista).toEqual([{ id: 1, name: 'leche', price: 1 }]);
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