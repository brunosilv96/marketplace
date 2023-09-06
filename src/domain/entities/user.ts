export type UserDTO = {
    readonly id: string;
    name: string;
    age: number;
};

export class User {
    private props: UserDTO;

    get id() {
        return this.props.id;
    }

    get name() {
        return this.props.name;
    }

    get age() {
        return this.props.age;
    }

    constructor(props: UserDTO) {
        this.props = props;
    }
}
