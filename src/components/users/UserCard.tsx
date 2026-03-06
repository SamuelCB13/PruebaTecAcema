import { User } from '@/types/user';
import Image from 'next/image';

type Props = {
    user: User;
    onOpenModal: () => void;
};

import { useUserStore } from "@/store/userStore";
import { EditIcon, MailIcon, MapPinCheckIcon, PhoneIcon, Trash2Icon, UserRoundIcon } from "lucide-react";

export default function UserCard({ user, onOpenModal }: Props) {
    const setUserToEdit = useUserStore((s) => s.setUserToEdit);
    const setUserToDelete = useUserStore((s) => s.setUserToDelete);

    return (
        <section className="bg-primary/5 border border-primary/20 rounded-xl p-5 space-y-6 hover:bg-primary/10 hover:border-primary/40 transition-colors duration-200">
            <header className="flex items-center gap-2 md:gap-3">
                <div className="p-2 bg-primary/30 rounded-full">
                    <UserRoundIcon className="text-primary size-4 md:size-5" />
                </div>
                <h2 className="text-white font-bold text-lg md:text-xl">{user.name.first} {user.name.last}</h2>
            </header>
            <li
                className="flex flex-col gap-2 border border-border rounded-xl pb-3">
                <figure>
                    <Image
                        src={user.picture.large ?? "/user-default.png"}
                        alt={"Foto de usuario"}
                        width={240}
                        height={240}
                        className="w-full h-96 object-cover rounded-t-xl"
                    />
                </figure>
                <ul className="py-3 px-7 space-y-2">
                    <li className="flex items-center gap-2 text-text">
                        <MailIcon className="size-4" />
                        <p>{user.email}</p>
                    </li>
                    <li className="flex items-center gap-2 text-text">
                        <PhoneIcon className="size-4" />
                        <p>{user.phone}</p>
                    </li>
                    <li className="flex items-center gap-2 text-text">
                        <MapPinCheckIcon className="size-4" />
                        <p>{user.location.street}, {user.location.city}, {user.location.state}</p>
                    </li>
                </ul>
            </li>
            <hr className="text-border rounded-full" />
            <footer className="flex items-center gap-4 md:gap-5">
                <button
                    onClick={() => {
                        setUserToEdit(user);
                        onOpenModal();
                    }}
                    className="flex items-center gap-2 text-white bg-black hover:bg-neutral-800 transition duration-200 px-5 py-2 rounded-lg font-semibold text-xs xl:text-sm w-full justify-center border border-neutral-800 cursor-pointer">
                    <EditIcon className="size-4 md:size-5" />
                    Editar
                </button>
                <button
                    onClick={() => setUserToDelete(user)}
                    className="flex  items-center justify-center text-red bg-delete hover:bg-red-950 transition duration-200 px-5 py-2 rounded-lg w-1/5 md:w-auto border border-red-950 cursor-pointer">
                    <Trash2Icon className="size-4 md:size-5" />
                </button>
            </footer>
        </section>
    )
}
