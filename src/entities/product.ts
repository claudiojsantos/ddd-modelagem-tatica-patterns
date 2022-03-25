export default class Product {
  private _id: string;
  private _name: string;
  private _price: number = 0.00;

  constructor(id: string, name: string, price: number) {
    this._id = id;
    this._name = name;
    this._price = price;
    this.validate();
  }
  
  validate() {
    if (this._id.length === 0) {
      throw new Error('Id is required');
    }

    if (this._name.length === 0) {
      throw new Error('Name Product is required');
    }

    if (this._price <= 0.00) {
      throw new Error('Price is must be greather than 0.00');
    }

    return true;
  }

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }

  changeName(name: string) {
    this._name = name;
  }

  changePrice(price: number) {
    if (price <= 0.00) {
      throw new Error('Price is must be greater than 0.00');
    }

    this._price = price;
  }
}