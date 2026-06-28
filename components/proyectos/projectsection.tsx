import ProjectCard from "./projectcard";

const projects = [
  {
    title: "Sistema de Honeypots",
    category: "Investigación",
    description:
      "Desarrollo de un laboratorio de honeypots para el análisis de ataques y recolección de inteligencia de amenazas.",
    github: "https://github.com/seic-udea/honeypot",
  },
  {
    title: "Ransomware Detection",
    category: "Machine Learning",
    description:
      "Investigación enfocada en la detección temprana de ransomware utilizando técnicas de aprendizaje automático.",
    github: "https://github.com/seic-udea/ransomware-detection",
  },
  {
    title: "Cyber Range",
    category: "Laboratorio",
    description:
      "Plataforma para la práctica de ejercicios ofensivos y defensivos en un entorno controlado.",
    github: "https://github.com/seic-udea/cyber-range",
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-black py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="uppercase tracking-widest text-green-500 font-semibold">
            Investigación
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Nuestros Proyectos
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-zinc-400">
            Desarrollamos proyectos de investigación e innovación orientados a
            fortalecer la seguridad digital y generar conocimiento aplicado.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}

        </div>

      </div>

    </section>
  );
}