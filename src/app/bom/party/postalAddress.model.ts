import {Address} from './address.model';

export class PostalAddress extends Address {

  type: string;
  street: string;
  city: string;
  postalcode: string;
  houseNo: string;
  country: string;

  constructor(id: string, street: string, city: string, postalcode: string, houseNo: string, country: string) {
    super(id);
    this.street = street;
    this.city = city;
    this.postalcode = postalcode;
    this.houseNo = houseNo;
    this.country = country;
  }
}

export const initialPostalAddress: PostalAddress = {
  type: 'postalAddress',
  addressId: '',
  street: '',
  city: '',
  postalcode: '',
  houseNo: '',
  country: ''
};
