import { create } from "zustand";
import { User } from "@/types/user";

interface UserState {
    users: User[];
    nextId: number;

    // edit
    updateUser: (user: User) => void;
    userToEdit: User | null;
    setUserToEdit: (user: User | null) => void;

    // delete
    userToDelete: User | null;
    setUserToDelete: (user: User | null) => void;
    deleteUser: (id: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
    // 🧠 users por defecto
    users: [
        {
            "id": "1",
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "amândio",
                "last": "silveira"
            },
            "location": {
                "street": "8769 rua sete de setembro",
                "city": "santa bárbara d'oeste",
                "state": "paraná",
                "zip": 40753
            },
            "email": "amândio.silveira@example.com",
            "username": "ticklishwolf940",
            "password": "chicken",
            "salt": "d5PzIPMc",
            "md5": "f784bcf69d343f247f16900f0729e37e",
            "sha1": "e5a719e3f66c21054a3b1fffdb3b78274bfe08b4",
            "sha256": "2c9c997dc7476933fef402d30c6694f8484af39121ec4eadf94a4af73b110774",
            "registered": 1114911910,
            "dob": 295724063,
            "phone": "(73) 7783-1856",
            "cell": "(40) 8992-5068",
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/37.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/37.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/37.jpg"
            }
        },
        {
            "id": "2",
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "arcádio",
                "last": "teixeira"
            },
            "location": {
                "street": "1073 rua carlos gomes",
                "city": "rio claro",
                "state": "rio grande do sul",
                "zip": 87079
            },
            "email": "arcádio.teixeira@example.com",
            "username": "silvergoose468",
            "password": "baxter",
            "salt": "0p6GQtwT",
            "md5": "27f3fd5ca649f03e3b083569ab0e76b8",
            "sha1": "e79668a50d62e4474440e15b4089523c05c2b8c8",
            "sha256": "3e67889626f1fc617be1fdda07ceb91d27358eee4482800d7d7a48930fbdcf98",
            "registered": 1157060338,
            "dob": 711163938,
            "phone": "(28) 1840-0441",
            "cell": "(70) 1144-9017",
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/2.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/2.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/2.jpg"
            },
        },
        {
            "id": "3",
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "benvindo",
                "last": "moura"
            },
            "location": {
                "street": "4600 rua dois",
                "city": "porto seguro",
                "state": "pernambuco",
                "zip": 67198
            },
            "email": "benvindo.moura@example.com",
            "username": "lazyleopard672",
            "password": "miracle",
            "salt": "iPTTuaza",
            "md5": "1389130102b24636891dafa15f92c633",
            "sha1": "a8fd3afc3a097919084af5b1aee834670ec27600",
            "sha256": "77d934892d9a9478369f3e2433fae8e1ab4f4f09a9c264fa3dd2a53b2435e071",
            "registered": 991652978,
            "dob": 944171419,
            "phone": "(72) 5304-1707",
            "cell": "(13) 8063-2375",
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/49.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/49.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/49.jpg"
            }
        },
        {
            "id": "4",
            "gender": "female",
            "name": {
                "title": "mrs",
                "first": "clarisse",
                "last": "ferreira"
            },
            "location": {
                "street": "7041 rua treze",
                "city": "gravataí",
                "state": "pará",
                "zip": 67296
            },
            "email": "clarisse.ferreira@example.com",
            "username": "whitewolf812",
            "password": "colombia",
            "salt": "I54jmM8w",
            "md5": "3869f4bed3cca273e638f6dfaecea14f",
            "sha1": "064f8ebe6bc446bb4456c3d8a95839cbbbbb9b0f",
            "sha256": "2a37d0394ec5ceee3c4645b2707b46c37a35adf772868618546f3907a1f312e2",
            "registered": 1349643956,
            "dob": 467581235,
            "phone": "(17) 8870-8095",
            "cell": "(26) 4725-2364",
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/79.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/79.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/79.jpg"
            }
        },
        {
            "id": "5",
            "gender": "female",
            "name": {
                "title": "mrs",
                "first": "emanuela",
                "last": "ribeiro"
            },
            "location": {
                "street": "4368 rua vinte de setembro",
                "city": "itaguaí",
                "state": "minas gerais",
                "zip": 23560
            },
            "email": "emanuela.ribeiro@example.com",
            "username": "tinygoose366",
            "password": "sinbad",
            "salt": "jwvmqcrE",
            "md5": "b8d5a01a7b73d91dbf0bfa6ea5302fad",
            "sha1": "de26895a1114a1eb37d1627d153d86d3346429e3",
            "sha256": "6853effe8c9dc77c185211f93f35686b01722ed0a08085f016f0dfe42fafb119",
            "registered": 1287662921,
            "dob": 50871723,
            "phone": "(59) 2351-8557",
            "cell": "(25) 8035-7713",
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/63.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/63.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/63.jpg"
            }
        }
    ],

    nextId: 3,

    // edit
    updateUser: (updated) =>
        set((state) => ({
            users: state.users.map((a) =>
                a.id === updated.id ? updated : a
            ),
            userToEdit: null,
        })),

    userToEdit: null,
    setUserToEdit: (user) => set({ userToEdit: user }),

    // delete
    userToDelete: null,
    setUserToDelete: (user) => set({ userToDelete: user }),

    deleteUser: (id) =>
        set((state) => ({
            users: state.users.filter((a) => a.id !== id),
            userToDelete: null,
        })),
}));
