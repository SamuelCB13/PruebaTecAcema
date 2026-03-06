"use client";

import { useEffect, useState } from "react";
import { toast } from "@pheralb/toast";
import { SearchIcon } from "lucide-react";
import UsersList from "@/components/users/UsersList";
import { UserModal } from "@/components/modal/UserModal";
import { ConfirmModal } from "@/components/modal/ConfirmModal";
import { useUserStore } from "@/store/userStore";

export default function Home() {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const userToDelete = useUserStore((s) => s.userToDelete);
    const setUserToDelete = useUserStore((s) => s.setUserToDelete);
    const deleteUser = useUserStore((s) => s.deleteUser);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // 1.5 segundos

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <section className="flex flex-col p-5 sm:p-8 space-y-5">
            <header className="max-w-7xl mx-auto w-full">
                <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-black text-balance leading-tight text-white">
                    Lista De Usuarios
                </h1>

                <p className="text-sm md:text-base xl:text-lg text-neutral-400 text-pretty leading-relaxed">
                    Lista, edita y elimina usuarios
                </p>
            </header>

            <article className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto w-full gap-5 animate-fadeIn">
                {/* Buscador */}
                <div className="relative w-full md:w-2/4">
                    <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 size-4" />
                    <input
                        type="text"
                        placeholder="Buscar usuarios por nombre o email..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-10 py-2 bg-neutral-950 border border-neutral-800 rounded-xl text-white placeholder:text-neutral-400 hover:border-neutral-600 duration-200 focus:outline-none focus:border-primary"
                    />
                </div>
            </article>

            <div className="max-w-7xl mx-auto w-full animate-fadeIn">
                <UsersList search={search} onOpenModal={() => setIsModalOpen(true)} />
            </div>

            <UserModal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

            <ConfirmModal
                open={Boolean(userToDelete)}
                title="Eliminar Usuario"
                description="Esta acción no se puede deshacer. ¿Deseas continuar?"
                onCancel={() => setUserToDelete(null)}
                onConfirm={() => {
                    if (!userToDelete) return;

                    deleteUser(userToDelete.id);

                    toast.success({
                        text: 'Usuario eliminado con éxito.',
                    });
                }}
            />
        </section>
    );
}
