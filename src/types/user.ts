export interface UserForm {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    location: {
        street: string;
        city: string;
        state: string;
        zip: number;
    };
    email: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
    registered: number;
    dob: number;
    phone: string;
    cell: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}

export interface User extends UserForm {
    id: string;
}
