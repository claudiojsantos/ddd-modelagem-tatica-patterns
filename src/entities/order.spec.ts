import Order from './order';
import OrderItem from './order_item';

describe('Order unit test', () => {
  it('should throw error when id is empty', () => {
    expect(() => {
      let order = new Order('', '123', []);
    }).toThrowError('Id is required');
  });

  it('should thrown error when customerId is empty', () => {
    expect(() => {
      let order = new Order('1', '', []);
    }).toThrowError('CustomerId is required');
  });

  it('should thrown error when quantity items is equal 0', () => {
    expect(() => {
      let order = new Order('1', '123', []);
    }).toThrowError('Items are required');
  });

  it('should calculate total', () => {
    let item01 = new OrderItem('i1', 'item 01', 20.0);
    let item02 = new OrderItem('i2', 'item 02', 35.0);
    let item03 = new OrderItem('i3', 'item 03', 56.0);

    let order = new Order('1', '123', [item01, item02, item03]);
    let total = order.total();

    expect(total).toBe(111.00)
  });
});
