import Image from "next/image";
import ProjectsSection from "@/components/proyectos/projectsection";
export default function Unete() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <ProjectsSection />
    </div>
  );
}
