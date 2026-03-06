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
            "gender": "female",
            "name": {
                "title": "mrs",
                "first": "emma",
                "last": "wolf"
            },
            "location": {
                "street": "6798 birkenstraße",
                "city": "altenburger land",
                "state": "baden-württemberg",
                "zip": 50664
            },
            "email": "emma.wolf@example.com",
            "username": "goldensnake263",
            "password": "hetfield",
            "salt": "70R0okMV",
            "md5": "6a2a03b0aef33fb32b3f89e4f3f3ed6b",
            "sha1": "5076cb34d1d0a9ce74dc7ebca2f7fff8e0893fc4",
            "sha256": "05a6070945b98a6b7a06c3a96b35f7c12b415d5b49ee27af508bc9661032af07",
            "registered": 1117223483,
            "dob": 447866705,
            "phone": "0548-9343451",
            "cell": "0170-2954019",
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/19.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/19.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/19.jpg"
            }
        },
        {
            "id": "2",
            "gender": "female",
            "name": {
                "title": "ms",
                "first": "michelle",
                "last": "schiller"
            },
            "location": {
                "street": "2635 berliner straße",
                "city": "rendsburg-eckernförde",
                "state": "brandenburg",
                "zip": 66477
            },
            "email": "michelle.schiller@example.com",
            "username": "organicpeacock939",
            "password": "hello123",
            "salt": "66zpiktA",
            "md5": "f5628400ef16205aaed017268a91eac2",
            "sha1": "00a5557a4414caf1bfb3182c6472369193a64d1f",
            "sha256": "c98bb0062d5a0c967fe42849cc73ba5909bfb83d563644b8f7152cda549b3bae",
            "registered": 1364187661,
            "dob": 1193047722,
            "phone": "0697-0302344",
            "cell": "0176-8341637",
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/71.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/71.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/71.jpg"
            }
        },
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
