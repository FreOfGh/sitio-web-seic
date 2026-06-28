import Image from "next/image";
import Link from "next/link";

export default function CTFPlatforma() {
    return (
        <section className="bg-[#050505] py-28">
            <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

                {/* Imagen */}
                <div className="flex justify-center">

                    <Image
                        src="/images/ctf-platform.png"
                        alt="CTF Platform"
                        width={500}
                        height={500}
                        className="object-contain"
                    />

                </div>

                {/* Texto */}

                <div>

                    <span className="font-semibold uppercase tracking-widest text-green-500">
                        Plataforma CTF
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-white">
                        Aprende practicando
                    </h2>

                    <p className="mt-8 leading-8 text-zinc-400">
                        Nuestra plataforma CTF está diseñada para fortalecer las habilidades
                        técnicas de estudiantes y entusiastas de la ciberseguridad mediante
                        desafíos prácticos en criptografía, seguridad web, análisis forense,
                        ingeniería inversa, explotación de vulnerabilidades y muchas otras
                        categorías.
                    </p>

                    <p className="mt-5 leading-8 text-zinc-400">
                        Cada reto representa una oportunidad para aprender, investigar y
                        prepararse para competencias nacionales e internacionales en un
                        entorno seguro y colaborativo.
                    </p>
                    <Link
                        href={process.env.NEXT_PUBLIC_CTF_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-10 inline-flex rounded-lg bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-500"
                    >
                        Explorar Plataforma
                    </Link>

                </div>

            </div>
        </section>
    );
}