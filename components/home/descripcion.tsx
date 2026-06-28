import Image from "next/image";

const activities = [
  {
    title: "Participamos en CTFs",
    description:
      "Competimos en eventos Capture The Flag para fortalecer habilidades en pentesting, reversing, criptografía y explotación de vulnerabilidades.",
    image: "/images/ctf.png",
  },
  {
    title: "Charlas de Ciberseguridad",
    description:
      "Realizamos talleres, conferencias y espacios de divulgación para compartir conocimiento con la comunidad académica.",
    image: "/images/talk.png",
  },
  {
    title: "Investigación",
    description:
      "Desarrollamos proyectos de investigación en diferentes áreas de la ciberseguridad con impacto académico y tecnológico.",
    image: "/images/research.png",
  },
];

export default function descripcion() {
  return (
    <section className="bg-[#050505] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="text-green-500 font-semibold uppercase tracking-widest">
            SEIC UDEA
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            ¿Qué hacemos?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-zinc-400">
            Nuestro semillero busca fortalecer las competencias de los estudiantes
            mediante investigación, formación y participación activa en eventos
            nacionales e internacionales de ciberseguridad.
          </p>

        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-3">

          {activities.map((activity) => (
            <div
              key={activity.title}
              className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-8 text-center transition duration-300 hover:border-green-500 hover:-translate-y-2"
            >
              <div className="mx-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-2 border-green-500 bg-black">

                <Image
                  src={activity.image}
                  alt={activity.title}
                  width={90}
                  height={90}
                  className="object-contain"
                />

              </div>

              <h3 className="mt-8 text-2xl font-semibold text-white">
                {activity.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {activity.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}