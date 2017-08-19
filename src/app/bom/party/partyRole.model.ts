import { Party } from './party.model';

export abstract class PartyRole {

    id: string;

    constructor(id: string) {
        this.id = id;
    }
}
