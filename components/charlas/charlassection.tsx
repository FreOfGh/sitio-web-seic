import TalkCard from "./charlascard";

const talks = [
  {
    title: "Introducción al Pentesting",
    speaker: "SEIC UDEA",
    description:
      "Conceptos fundamentales, metodologías y herramientas utilizadas en pruebas de penetración éticas.",
    link: "https://github.com/seic-udea/talks/pentesting",
  },
  {
    title: "Ingeniería Inversa con Ghidra",
    speaker: "SEIC UDEA",
    description:
      "Taller práctico sobre análisis de binarios utilizando Ghidra y técnicas básicas de reversing.",
    link: "https://github.com/seic-udea/talks/ghidra",
  },
  {
    title: "Seguridad Web OWASP Top 10",
    speaker: "SEIC UDEA",
    description:
      "Introducción a las principales vulnerabilidades web y estrategias para mitigarlas.",
    link: "https://github.com/seic-udea/talks/owasp",
  },
];

export default function CharlasSection() {
  return (
    <section className="bg-black py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="uppercase tracking-widest text-green-500 font-semibold">
            Formación
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Charlas y Talleres
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-zinc-400">
            Compartimos conocimiento mediante charlas, talleres y actividades de
            formación orientadas a estudiantes, docentes y entusiastas de la
            ciberseguridad.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {talks.map((talk) => (
            <TalkCard key={talk.title} {...talk} />
          ))}

        </div>

      </div>

    </section>
  );
}