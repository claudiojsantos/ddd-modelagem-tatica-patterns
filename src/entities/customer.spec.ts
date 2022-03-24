import Address from './address';
import Customer from './customer';

describe('Customer unit tests', () => {
  it('should throw error when id is empty', () => {
    expect(() => {
      let customer = new Customer('', 'John');
    }).toThrowError('Id is required');
  });

  describe('customer name', () => {
    it('should throw error when name is name is empty', () => {
      expect(() => {
        let customer = new Customer('1', '');
      }).toThrowError('Name is required');
    });

    it('should thrown error when change name is empty', () => {
      let customer = new Customer('1', 'John');

      expect(() => {
        customer.changeName('');
      }).toThrowError('Name is required');
    });

    it('should change name', () => {
      const customer = new Customer('1', 'John');
      customer.changeName('Jane');

      expect(customer.name).toBe('Jane');
    });
  });

  describe('activate and deactivate customer', () => {
    it('should throw error when address is undefined when activate a customer', () => {
      const customer = new Customer('1', 'John');

      expect(() => {
        customer.activate();
      }).toThrowError('Address is mandatory to activate a customer');
    });

    it('should activate customer', () => {
      const customer = new Customer('1', 'John');
      const address = new Address('street 01', '123', '12124-123', 'city');

      customer.Address = address;

      customer.activate();

      expect(customer.isActive()).toBe(true);
    });

    it('should deactivate customer', () => {
      let customer = new Customer('1', 'John');

      customer.deactivate();

      expect(customer.isActive()).toBe(false);
    });
  });
});
