export class Filmmaker
{
    firstname;
    lastname;
    nationality;
    birthdate;

    constructor(firstname = "", lastname = "", nationality = "", birthdate = "") {
        this.firstname = firstname;
        this.lastname = lastname;
        this.nationality = nationality;
        this.birthdate = birthdate;
    }

    toString() {
        return this.firstname + ' ' + this.lastname;
    }
}
