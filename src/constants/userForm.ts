import { UserForm } from '@/types/user'

export const INITIAL_USER_FORM: UserForm = {
    gender: '',
    name: {
        title: '',
        first: '',
        last: '',
    },
    location: {
        street: '',
        city: '',
        state: '',
        zip: 0,
    },
    email: '',
    username: '',
    password: '',
    salt: '',
    md5: '',
    sha1: '',
    sha256: '',
    registered: 0,
    dob: 0,
    phone: '',
    cell: '',
    picture: {
        large: '',
        medium: '',
        thumbnail: '',
    },
};
