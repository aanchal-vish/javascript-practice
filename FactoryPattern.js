class Product {
    constructor(type, price) {
        this.type = type;
        this.price= price;
    }
}

class ProductFactory {
    createProducts (type) {
        switch(type) {
            case 'Shirt':
                return new Product('Shirt', 20);
            case 'Book':
                return new Product('Book', 20);
            default: return null;
        }
    }
}

const factory = new ProductFactory();
const book = factory.createProducts('Book');
const shirt = factory.createProducts('Shirt');