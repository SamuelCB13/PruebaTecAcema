"use client";

import { CheckSquareIcon, EyeIcon, EyeOffIcon, KeySquareIcon, LockIcon, MailCheckIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <section className="flex flex-col items-center justify-center p-5 sm:p-8 space-y-8 mx-auto max-w-7xl min-h-screen">
            <header className="flex flex-col items-center justify-center">
                <div className="bg-primary p-3 rounded-lg mb-4">
                    <CheckSquareIcon className="text-white size-6 md:size-7" />
                </div>
                <h1 className="text-xl md:text-2xl 2xl:text-3xl font-extrabold text-balance leading-tight text-white">
                    Gestor de Usuarios
                </h1>
                <p className="text-xs md:text-sm xl:text-base text-neutral-400 text-pretty leading-relaxed">
                    Lista y administra tus usuarios de forma fácil y rápida
                </p>
            </header>

            <form className="space-y-5 rounded-2xl border border-border bg-card p-8 shadow-xl shadow-black/20 w-full max-w-md">
                <header className="flex flex-col justify-center items-center">
                    <h2 className="text-lg text-primary font-bold">Iniciar Sesión</h2>
                    <p className="text-sm text-neutral-400">Ingresa tus credenciales para continuar</p>
                </header>
                <div className="col-span-3 md:col-span-1 space-y-2">
                    <label className="block text-xs md:text-sm ml-1 text-white">
                        Correo electrónico
                    </label>
                    <div className="relative w-full">
                        <MailCheckIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 size-4" />
                        <input
                            type="email"
                            name="email"
                            // value={form.email}
                            // onChange={handleChange}
                            placeholder="correo@gmail.com"
                            className="w-full px-11 py-3 bg-input border border-neutral-800 rounded-lg text-white placeholder:text-neutral-400 hover:border-primary duration-200 focus:outline-none focus:border-primary text-sm"
                        />
                    </div>
                </div>
                <div className="col-span-3 md:col-span-1 space-y-2">
                    <label className="block text-xs md:text-sm ml-1 text-white">
                        Contraseña
                    </label>
                    <div className="relative w-full">
                        <LockIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 size-4" />
                        <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            // value={form.password}
                            // onChange={handleChange}
                            placeholder="••••••••"
                            className="w-full px-11 py-3 bg-input border border-border rounded-lg text-white placeholder:text-neutral-400 hover:border-primary duration-200 focus:outline-none focus:border-primary text-sm"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-primary transition-colors cursor-pointer"
                        >
                            {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                        </button>
                    </div>
                </div>
                <article className="flex flex-col items-center justify-center space-y-5">
                    <Link
                        href="/"
                        className="bg-primary hover:bg-primary/50 w-full py-3 rounded-lg text-white font-medium text-sm transition-colors duration-200 text-center cursor-pointer"
                    >
                        <div className="flex items-center justify-center gap-2">
                            <KeySquareIcon className="size-4 md:size-5" />
                            <p>Iniciar Sesión</p>
                        </div>
                    </Link>
                </article>
            </form>
        </section>
    )
}
