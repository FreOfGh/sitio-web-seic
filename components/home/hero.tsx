import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
      {/* Fondo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_70%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.08)_1px,transparent_1px)] bg-[size:45px_45px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 pt-24 lg:grid-cols-2">

        {/* Texto */}
        <div>

          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-400">
            Universidad de Antioquia
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Semillero de
            <span className="block text-green-500">
              Investigación en
            </span>
            Ciberseguridad
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            Formamos estudiantes apasionados por la ciberseguridad mediante
            investigación, desarrollo tecnológico, competencias CTF y proyectos
            que contribuyen a fortalecer la seguridad digital.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              href="/nosotros"
              className="rounded-lg bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-500"
            >
              Conoce el semillero
            </Link>

            <Link
              href="/proyectos"
              className="rounded-lg border border-green-600 px-8 py-4 font-semibold text-green-500 transition hover:bg-green-600 hover:text-white"
            >
              Ver proyectos
            </Link>

          </div>

        </div>

        {/* Imagen */}
        <div className="flex justify-center">

          <div className="relative flex h-[500px] w-[500px] items-center justify-center rounded-full border border-green-500/20 bg-green-500/5">

            {/* Aquí irá una ilustración */}
            <img
              src="/hero-cyber.svg"
              alt="Cybersecurity"
              className="w-[420px]"
            />

          </div>

        </div>

      </div>
    </section>
  );
}