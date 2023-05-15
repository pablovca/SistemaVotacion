export class Student {

    id: number;
    already_voted: boolean;
    section: string;

    constructor(id: number, already_voted: boolean, section: string) {
        this.id = id;
        this.already_voted = already_voted;
        this.section = section;
    }
}