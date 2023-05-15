export class Vote {

    student_id: number;
    section: string;
    party_id: number;

    constructor(student_id: number, section: string, party_id: number) {
        this.student_id = student_id;
        this.section = section;
        this.party_id = party_id;
    }
}