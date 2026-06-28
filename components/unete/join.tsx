import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Participación en proyectos de investigación",
  "Entrenamiento para competencias CTF",
  "Charlas, talleres y actividades académicas",
  "Trabajo colaborativo con estudiantes y docentes",
];

export default function Join() {
  return (
    <section className="bg-black py-28">
      <div className="mx-auto max-w-6xl px-6">

        <div className="overflow-hidden rounded-3xl border border-green-500/20 bg-gradient-to-br from-zinc-950 to-zinc-900 p-12 shadow-2xl">

          <div className="text-center">

            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-green-400">
              Convocatoria Abierta
            </span>

            <h2 className="mt-8 text-4xl font-bold text-white md:text-5xl">
              ¿Quieres hacer parte del SEIC UDEA?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              Únete a nuestro semillero y fortalece tus conocimientos en
              ciberseguridad participando en proyectos de investigación,
              competencias CTF, talleres y actividades académicas.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-black/40 p-5"
              >
                <CheckCircle2 className="text-green-500" size={24} />

                <span className="text-zinc-300">
                  {benefit}
                </span>
              </div>
            ))}

          </div>

          <div className="mt-14 text-center">

            <a
              href={process.env.NEXT_PUBLIC_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-green-500 hover:scale-105"
            >
              Inscribirme al Semillero

              <ArrowRight size={20} />

            </a>

          </div>

        </div>

      </div>
    </section>
  );
}