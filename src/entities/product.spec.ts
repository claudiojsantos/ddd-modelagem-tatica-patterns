import Product from './product';

describe('Product unit tests', () => {
  it('should thrown error when id is empty', () => {
    expect(() => {
      let product = new Product('', 'Product 01', 100.0);
    }).toThrowError('Id is required');
  });

  it('should thrown error when name is empty', () => {
    expect(() => {
      let product = new Product('1', '', 100.0);
    }).toThrowError('Name Product is required');
  });

  it('should thrown error when price is less than or equal 0.00', () => {
    expect(() => {
      let product = new Product('1', 'Product 01', 0.0);
    }).toThrowError('Price is must be greather than 0.00');
  });

  it('should change name', () => {
    expect(() => {
      let product = new Product('1', 'Product 01', 100.0);
      product.changeName('Product 001');
      expect(product.name).toBe('Product 001');
    });
  });

  it('should change price', () => {
    let product = new Product('1', 'Product 01', 100.0);
    product.changePrice(110.0);
    expect(product.price).toBe(110.0);
  });

  it('should thrown error if change price is less or equal than 0.00', () => {
    let product = new Product('1', 'Product 01', 100.0);

    expect(() => {
      product.changePrice(0.00);
    }).toThrowError('Price is must be greater than 0.00');
  });
});
