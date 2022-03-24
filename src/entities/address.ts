export default class Address {
  _street: string = '';
  _number: string = 's/n';
  _zip: string = '';
  _city: string = '';
  
  constructor(street: string, number: string, city: string) {
    this._street = street;
    this._number = number;
    this._city = city;
    this.validate();
  }

  validate(): void {
    if (this._street.length === 0 {
      throw new Error("Street is required")
    }

    if (this._zip.length === 0) {
      throw new Error("Zip is required")
    }

    if (this._city.length === 0) {
      throw new Error("City is required")
    }
  }

  toString() {
    return `${this._street}, ${this._number} - ${this._zip} - ${this._city}`
  }
}