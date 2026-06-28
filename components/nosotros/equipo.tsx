import MemberCard from "./membercard";

const members = [
  {
    image: "/team/director.jpg",
    name: "Juan Pérez",
    role: "Director",
    email: "juan@udea.edu.co",
  },
  {
    image: "/team/codirector.jpg",
    name: "María Gómez",
    role: "Codirectora",
    email: "maria@udea.edu.co",
  },
  {
    image: "/team/lider.jpg",
    name: "Carlos Ruiz",
    role: "Líder Técnico",
    email: "carlos@udea.edu.co",
  },
];

export default function Equipo() {
  return (
    <section className="bg-[#050505] py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="uppercase tracking-widest text-green-500">
            Equipo
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Nuestro Equipo
          </h2>

        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-3">

          {members.map((member) => (
            <MemberCard key={member.email} {...member} />
          ))}

        </div>

      </div>

    </section>
  );
}