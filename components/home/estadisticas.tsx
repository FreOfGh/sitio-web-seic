const stats = [
  {
    value: "15+",
    label: "Integrantes",
  },
  {
    value: "120+",
    label: "Retos CTF",
  },
  {
    value: "25+",
    label: "Charlas",
  },
  {
    value: "8+",
    label: "Proyectos",
  },
];

export default function Estadisticas() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="text-green-500 uppercase tracking-widest font-semibold">
            Impacto
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            SEIC en números
          </h2>

          <p className="mt-5 text-zinc-400 max-w-2xl mx-auto">
            Nuestro compromiso con la formación, la investigación y la
            participación en actividades académicas se refleja en el crecimiento
            continuo del semillero.
          </p>

        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 py-10 text-center transition hover:border-green-500"
            >
              <h3 className="text-5xl font-bold text-green-500">
                {stat.value}
              </h3>

              <p className="mt-4 text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}