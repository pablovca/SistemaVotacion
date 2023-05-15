
export class Party  {

    id: number;
    votes: number;
    president_name: string;
    party_name: string;

    constructor(id: number, votes: number, president_name: string, party_name: string) {
        this.id = id;
        this.votes = votes;
        this.president_name = president_name;
        this.party_name = party_name;
    }

}