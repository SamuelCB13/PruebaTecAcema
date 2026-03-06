import { CheckIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import StepOne from "./StepOne";
import { toast } from "@pheralb/toast";
import { useUserStore } from '@/store/userStore';
import { INITIAL_USER_FORM } from "@/constants/userForm";
import { UserForm } from "@/types/user";

type Props = {
    open: boolean;
    onClose: () => void;
};

export function UserModal({ open, onClose }: Props) {
    const [form, setForm] = useState<UserForm>(INITIAL_USER_FORM);

    const { gender, name, location, email, username, phone, cell } = form;
    const { first, last } = name;
    const { street, city, state } = location;

    const isStepOneValid =
        gender !== '' &&
        first !== '' &&
        last !== '' &&
        street !== '' &&
        city !== '' &&
        state !== '' &&
        email !== '' &&
        username !== '' &&
        phone !== '' &&
        cell !== '';

    const userToEdit = useUserStore((s) => s.userToEdit);
    const setUserToEdit = useUserStore((s) => s.setUserToEdit);
    const updateUser = useUserStore((s) => s.updateUser);

    const isEditMode = Boolean(userToEdit);

    useEffect(() => {
        if (userToEdit) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setForm(userToEdit);
        } else {
            setForm(INITIAL_USER_FORM);
        }
    }, [userToEdit]);

    const handleClose = () => {
        setUserToEdit(null);
        setForm(INITIAL_USER_FORM);
        onClose();
    };

    const updateField = <K extends keyof UserForm>(
        field: K,
        value: UserForm[K]
    ) => {
        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const updateNameLength = (
        field: keyof UserForm['name'],
        value: string
    ) => {
        setForm((prev) => ({
            ...prev,
            name: {
                ...prev.name,
                [field]: value,
            },
        }));
    };

    const updateLocationLength = (
        field: keyof UserForm['location'],
        value: string
    ) => {
        setForm((prev) => ({
            ...prev,
            location: {
                ...prev.location,
                [field]: value,
            },
        }));
    };

    const handleSave = () => {
        if (isEditMode && userToEdit) {
            updateUser({
                ...form,
                id: userToEdit.id,
            });

            toast.success({
                text: "Usuario editado con éxito.",
            });
        } else {

        }

        handleClose();
        setForm(INITIAL_USER_FORM);
    };

    if (!open) return null;

    return (
        <section className="fixed inset-0 z-50 flex items-center justify-center p-5">
            {/* Overlay */}
            <article
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                onClick={handleClose}
            />

            {/* Modal */}
            <article className="relative z-10 w-full max-w-4xl bg-dark border border-neutral-800 rounded-xl p-5 px-7 animate-fadeOut space-y-5 max-h-[90dvh] overflow-y-auto">
                <header className="space-y-3">
                    <div className="flex flex-col md:flex-row text-center items-center justify-between gap-2">
                        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black text-balance leading-tight text-white">
                            Editar Usuario
                        </h2>
                        <p className="block text-xs md:text-sm text-neutral-600 italic">
                            Los campos marcados con  <span className="text-primary font-bold">*</span> son obligatorios.
                        </p>
                    </div>

                    <p className="text-sm md:text-base text-neutral-400 text-pretty leading-relaxed">
                        Datos básicos
                    </p>
                </header>

                <StepOne
                    gender={form.gender}
                    first={form.name.first}
                    last={form.name.last}
                    email={form.email}
                    phone={form.phone}
                    cell={form.cell}
                    street={form.location.street}
                    city={form.location.city}
                    state={form.location.state}
                    onGenderChange={(v) => updateField('gender', v)}
                    onFirstChange={(v) => updateNameLength('first', v)}
                    onLastChange={(v) => updateNameLength('last', v)}
                    onEmailChange={(v) => updateField('email', v)}
                    onPhoneChange={(v) => updateField('phone', v)}
                    onCellChange={(v) => updateField('cell', v)}
                    onStreetChange={(v) => updateLocationLength('street', v)}
                    onCityChange={(v) => updateLocationLength('city', v)}
                    onStateChange={(v) => updateLocationLength('state', v)}
                />

                <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                    <button
                        onClick={() => handleClose()}
                        className="flex items-center gap-2 text-white bg-black hover:bg-neutral-800 transition duration-200 px-5 py-2 rounded-lg font-semibold text-xs xl:text-sm justify-center border border-neutral-800 cursor-pointer"
                    >
                        <XIcon className="size-4 md:size-5" />
                        Cancelar
                    </button>

                    <button
                        onClick={handleSave}
                        disabled={!isStepOneValid}
                        className="flex items-center gap-2 text-white bg-primary hover:bg-primary/40 transition duration-200 px-5 py-2 rounded-lg font-semibold text-xs xl:text-sm justify-center cursor-pointer"
                    >
                        Guardar Cambios
                        <CheckIcon className="size-4 md:size-5" />
                    </button>
                </div>
            </article>
        </section>
    );
}
