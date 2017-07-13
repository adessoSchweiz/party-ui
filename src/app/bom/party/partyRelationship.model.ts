import { Party } from "./party.model";
import { PartyRelationshipType } from "./partyRelationshipType";

export class PartyRelationship {
    
    party1: Party;
    party2: Party;
    relationshipType: PartyRelationshipType;
    
}
