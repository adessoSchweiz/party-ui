import {Party} from './party.model';
import {ContactTypeEnum} from './contactType';
import {Address} from './address.model';
import {initialPostalAddress} from './postalAddress.model';

export class Contact {

  contactId: string;
  contactType: ContactTypeEnum;
  address: Address;
}

export const initialContacts: Contact[] = [
  {
    contactId: '',
    contactType: ContactTypeEnum.DOMICILE,
    address: initialPostalAddress,
  }
];
