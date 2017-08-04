import { Party } from './party.model';

export abstract class PartyRole {

    party: Party;
    login: string;
    password: string;

    constructor(party: Party, login: string, password: string ) {
        this.party = party;
        this.login = login;
        this.password = password;
    }
}
