import { Address } from './address.model';
import { ElectronicAddressType } from './electronicAddressType';

export class ElectronicAddress extends Address {

    type: string;
    electronicType: ElectronicAddressType;
    value: string;

  constructor(id: string, electronicType: ElectronicAddressType, value: string) {
    super(id);
    electronicType = electronicType;
    this.value = value;
  }
}

  export const initialElectronicAddressAddress: ElectronicAddress = {
  type: 'electronicAddress',
  addressId: '',
  electronicType: ElectronicAddressType.MOBILE,
  value: ''
};
