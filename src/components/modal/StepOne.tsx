type Props = {
    gender: string;
    first: string;
    last: string;
    email: string;
    phone: string;
    cell: string;
    street: string;
    city: string;
    state: string;

    onGenderChange: (v: string) => void;
    onFirstChange: (v: string) => void;
    onLastChange: (v: string) => void;
    onEmailChange: (v: string) => void;
    onPhoneChange: (v: string) => void;
    onCellChange: (v: string) => void;
    onStreetChange: (v: string) => void;
    onCityChange: (v: string) => void;
    onStateChange: (v: string) => void;
};

export default function StepOne({
    gender,
    first,
    last,
    email,
    phone,
    cell,
    street,
    city,
    state,
    onGenderChange,
    onFirstChange,
    onLastChange,
    onEmailChange,
    onPhoneChange,
    onCellChange,
    onStreetChange,
    onCityChange,
    onStateChange,
}: Props) {
    return (
        <article className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
            <div className="col-span-3 md:col-span-1 space-y-2">
                <label className="block text-xs md:text-sm ml-1 text-neutral-500">
                    Nombres <span className="text-primary font-bold">*</span>
                </label>
                <input
                    type="text"
                    placeholder="Ej: Samuel"
                    value={first}
                    onChange={(e) => onFirstChange(e.target.value)}
                    className="w-full rounded-lg border border-neutral-700 px-3 py-2 text-white focus:border-primary focus:outline-none transition-colors duration-200 hover:border-neutral-500 text-xs md:text-sm"
                />
            </div>
            <div className="col-span-3 md:col-span-1 space-y-2">
                <label className="block text-xs md:text-sm ml-1 text-neutral-500">
                    Apellidos <span className="text-primary font-bold">*</span>
                </label>
                <input
                    type="text"
                    placeholder="Ej: Carvajal"
                    value={last}
                    onChange={(e) => onLastChange(e.target.value)}
                    className="w-full rounded-lg border border-neutral-700 px-3 py-2 text-white focus:border-primary focus:outline-none transition-colors duration-200 hover:border-neutral-500 text-xs md:text-sm"
                />
            </div>
            <div className="col-span-3 md:col-span-1 space-y-2">
                <label className="block text-xs md:text-sm ml-1 text-neutral-500">
                    Correo Electrónico <span className="text-primary font-bold">*</span>
                </label>
                <input
                    type="email"
                    placeholder="Ej: Casato311409@gmail.com"
                    value={email}
                    onChange={(e) => onEmailChange(e.target.value)}
                    className="w-full rounded-lg border border-neutral-700 px-3 py-2 text-white focus:border-primary focus:outline-none transition-colors duration-200 hover:border-neutral-500 text-xs md:text-sm"
                />
            </div>
            <div className="col-span-3 md:col-span-1 space-y-2">
                <label className="block text-xs md:text-sm ml-1 text-neutral-500">
                    Teléfono <span className="text-primary font-bold">*</span>
                </label>
                <input
                    type="text"
                    placeholder="Ej: 0548-9343451"
                    value={phone}
                    onChange={(e) => onPhoneChange(e.target.value)}
                    className="w-full rounded-lg border border-neutral-700 px-3 py-2 text-white focus:border-primary focus:outline-none transition-colors duration-200 hover:border-neutral-500 text-xs md:text-sm"
                />
            </div>
            <div className="col-span-3 md:col-span-1 space-y-2">
                <label className="block text-xs md:text-sm ml-1 text-neutral-500">
                    Celular <span className="text-primary font-bold">*</span>
                </label>
                <input
                    type="text"
                    placeholder="Ej: 0170-2954019"
                    value={cell}
                    onChange={(e) => onCellChange(e.target.value)}
                    className="w-full rounded-lg border border-neutral-700 px-3 py-2 text-white focus:border-primary focus:outline-none transition-colors duration-200 hover:border-neutral-500 text-xs md:text-sm"
                />
            </div>
            <div className="col-span-3 md:col-span-1 space-y-2">
                <label className="block text-xs md:text-sm ml-1 text-neutral-500">
                    Calle <span className="text-primary font-bold">*</span>
                </label>
                <input
                    type="text"
                    placeholder="Ej: 6798 birkenstraße"
                    value={street}
                    onChange={(e) => onStreetChange(e.target.value)}
                    className="w-full rounded-lg border border-neutral-700 px-3 py-2 text-white focus:border-primary focus:outline-none transition-colors duration-200 hover:border-neutral-500 text-xs md:text-sm"
                />
            </div>
            <div className="col-span-3 md:col-span-1 space-y-2">
                <label className="block text-xs md:text-sm ml-1 text-neutral-500">
                    Ciudad <span className="text-primary font-bold">*</span>
                </label>
                <input
                    type="text"
                    placeholder="Ej: altenburger land"
                    value={city}
                    onChange={(e) => onCityChange(e.target.value)}
                    className="w-full rounded-lg border border-neutral-700 px-3 py-2 text-white focus:border-primary focus:outline-none transition-colors duration-200 hover:border-neutral-500 text-xs md:text-sm"
                />
            </div>
            <div className="col-span-3 md:col-span-1 space-y-2">
                <label className="block text-xs md:text-sm ml-1 text-neutral-500">
                    Estado <span className="text-primary font-bold">*</span>
                </label>
                <input
                    type="text"
                    placeholder="Ej: baden-württemberg"
                    value={state}
                    onChange={(e) => onStateChange(e.target.value)}
                    className="w-full rounded-lg border border-neutral-700 px-3 py-2 text-white focus:border-primary focus:outline-none transition-colors duration-200 hover:border-neutral-500 text-xs md:text-sm"
                />
            </div>
            <div className="col-span-3 md:col-span-1">
                <label className="block text-xs md:text-sm mb-2 ml-1 text-neutral-500">
                    Género <span className="text-primary font-bold">*</span>
                </label>
                <select
                    value={gender}
                    onChange={(e) => onGenderChange(e.target.value)}
                    className="w-full rounded-lg border border-neutral-700 px-3 py-2 text-white focus:border-primary focus:outline-none transition-alcolorsl duration-200 cursor-pointer hover:border-neutral-500 text-xs md:text-sm"
                >
                    <option value="" disabled className="bg-neutral-900 text-neutral-500">
                        Selecciona un género
                    </option>
                    <option value="male" className="bg-neutral-900 text-white py-2 hover:bg-primary/20">
                        Masculino
                    </option>
                    <option value="female" className="bg-neutral-900 text-white py-2 hover:bg-primary/20">
                        Femenino
                    </option>
                </select>
            </div>
        </article>
    )
}
