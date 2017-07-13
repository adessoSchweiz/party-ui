import {Address} from "./address.model";

export class PostalAddress extends Address {

  street: string;
  city: string;
  postalcode: string;
  houseNo: string;
  country: string;

  constructor(id: number, street: string, city: string, postalcode: string, houseNo: string, country: string) {
    super(id);
    this.street = street;
    this.city = city;
    this.postalcode = postalcode;
    this.houseNo = houseNo;
    this.country = country;
  }
}

export const initialPostalAddress: PostalAddress = {
  id: 0,
  street: '',
  city: '',
  postalcode: '',
  houseNo: '',
  country: ''
};
