import { Address } from "./address.model";
import { ElectronicAddressType } from "./electronicAddressType";

export class ElectronicAddress extends Address {
    
    adressType: ElectronicAddressType;
    value: string;

}
