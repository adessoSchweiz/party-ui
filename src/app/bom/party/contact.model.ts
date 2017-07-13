import {Party} from "./party.model";
import {ContactTypeEnum} from "./contactType";
import {Address} from "./address.model";
import {initialPerson} from "./person.model";
import {initialPostalAddress} from "./postalAddress.model";

export class Contact {

  id: number;
  party: Party;
  contactType: ContactTypeEnum;
  address: Address;
}

export const initialContacts: Contact[] = [
  {
    id: 0,
    party: initialPerson,
    contactType: ContactTypeEnum.DOMICILE,
    address: initialPostalAddress,
  }
];
