import { Party } from "./party.model";

export abstract class PartyRole {

    id: number;
    party: Party;
    login: string;
    password: string;

    constructor( id: number, party: Party, login: string, password: string ) {
        this.id = id;
        this.party = party;
        this.login = login;
        this.password = password;
    }
}
