import { useUserStore } from "@/store/userStore";
import { XIcon } from "lucide-react"
import UserCard from "./UserCard";

type Props = {
    search: string;
    onOpenModal: () => void;
};

export default function UsersList({ search, onOpenModal }: Props) {
    const users = useUserStore((state) => state.users);

    const filteredUsers = users.filter((user) =>
        user.name.title.toLowerCase().includes(search.toLowerCase())
    );

    if (filteredUsers.length === 0) {
        return (
            <div className="flex items-center justify-center gap-1 text-secondary py-10">
                <XIcon className="size-5" />
                No se encontraron usuarios...
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {filteredUsers.map((user) => (
                <UserCard
                    key={user.id}
                    user={user}
                    onOpenModal={onOpenModal}
                />
            ))}
        </div>
    )
}
