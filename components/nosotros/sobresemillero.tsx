export default function SobreSemilleroCard() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">

        <div className="rounded-3xl border border-green-500/20 bg-white/5 p-12 backdrop-blur-xl">

          <span className="text-sm uppercase tracking-[0.3em] text-green-500">
            ¿Quiénes somos?
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Semillero de Investigación en Ciberseguridad
          </h2>

          <p className="mt-8 text-lg leading-9 text-zinc-300">
            El <span className="font-semibold text-green-500">SEIC UDEA</span>
            es un semillero de investigación comprometido con la formación de
            estudiantes en diferentes áreas de la ciberseguridad mediante la
            investigación, el desarrollo tecnológico y el aprendizaje práctico.

            Nuestro propósito es fortalecer las competencias técnicas y
            científicas de nuestros integrantes, promoviendo la participación en
            proyectos de investigación, competencias Capture The Flag (CTF),
            eventos académicos y actividades de divulgación del conocimiento.
          </p>

        </div>

      </div>
    </section>
  );
}