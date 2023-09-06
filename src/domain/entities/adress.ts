import { randomUUID } from "crypto";

export type AdressDTO = {
    id?: string;
    adress: string;
    zipcode: string;
    number: string;
    city: string;
    neighborhood: string;
    reference?: string;
};

export class Adress {
    private props!: AdressDTO;

    constructor(props: Omit<Adress, "id">, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.props.id = randomUUID();
        }
    }

    get id() {
        return this.props.id;
    }
    get adress() {
        return this.props.adress;
    }
    get zipcode() {
        return this.props.zipcode;
    }
    get number() {
        return this.props.number;
    }
    get city() {
        return this.props.city;
    }
    get neighborhood() {
        return this.props.neighborhood;
    }
    get reference() {
        return this.props.reference;
    }
}
