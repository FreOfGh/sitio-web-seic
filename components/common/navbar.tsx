"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Writeups", href: "/writeups" },
  { name: "Contacto", href: "/contacto" },
  { name: "Charlas", href: "/charlas" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-green-700/30 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-lg border border-green-600/40 bg-zinc-900">
            {/* Reemplaza por tu logo */}
            <Image
              src="/common/logo.png"
              alt="Logo SEIC UDEA"
              fill
              className="object-contain p-1"
              priority
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-wider text-green-500">
              SEIC
            </h1>

            <p className="text-xs text-zinc-400">
              Semillero de Investigación en Ciberseguridad · UDEA
            </p>
          </div>
        </Link>

        {/* Navegación */}
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-zinc-300 transition-colors duration-300 hover:text-green-500"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/unete"
            className="hidden rounded-lg bg-green-600 px-5 py-2.5 font-semibold text-white transition hover:bg-green-500 md:block"
          >
            Únete
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 text-zinc-300 transition hover:border-green-500 hover:text-green-500 md:hidden"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="text-2xl leading-none">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-green-700/30 bg-black/95 px-6 py-5 md:hidden">
          <nav className="space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:border-green-500 hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/unete"
              className="block rounded-2xl bg-green-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-green-500"
              onClick={() => setMenuOpen(false)}
            >
              Únete
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}