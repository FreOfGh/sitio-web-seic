import WriteupCard from "./writeupcard";

const writeups = [
  {
    title: "PicoCTF 2025 - Web Exploitation",
    category: "CTF",
    description:
      "Resolución de retos de explotación web utilizando técnicas de enumeración, manipulación de peticiones y análisis del código fuente.",
    github: "https://github.com/seic-udea/writeups/tree/main/picoctf2025",
  },
  {
    title: "Blue",
    category: "Máquina Virtual",
    description:
      "Writeup completo de la máquina Blue, abordando la explotación de EternalBlue y la escalada de privilegios.",
    github: "https://github.com/seic-udea/writeups/tree/main/blue",
  },
  {
    title: "Buffer Overflow 101",
    category: "Challenge",
    description:
      "Análisis y explotación de un desafío de desbordamiento de búfer mediante técnicas de ingeniería inversa y desarrollo de exploits.",
    github: "https://github.com/seic-udea/writeups/tree/main/bof101",
  },
];

export default function WriteupsSection() {
  return (
    <section className="bg-black py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="font-semibold uppercase tracking-widest text-green-500">
            Recursos
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Writeups
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-zinc-400">
            Compartimos soluciones, metodologías y aprendizajes obtenidos
            durante la resolución de CTFs, máquinas vulnerables y desafíos de
            ciberseguridad. Nuestro objetivo es fomentar el aprendizaje práctico
            y la investigación colaborativa.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {writeups.map((writeup) => (
            <WriteupCard key={writeup.title} {...writeup} />
          ))}

        </div>

      </div>

    </section>
  );
}