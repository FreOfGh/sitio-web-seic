import Link from "next/link";
import { GitBranchIcon, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  github: string;
}

export default function ProjectCard({
  title,
  category,
  description,
  github,
}: ProjectCardProps) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-950 p-7 transition hover:-translate-y-2 hover:border-green-500">

      <span className="w-fit rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-400">
        {category}
      </span>

      <h3 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-5 flex-1 leading-7 text-zinc-400">
        {description}
      </p>

      <Link
        href={github}
        target="_blank"
        className="mt-8 inline-flex items-center gap-2 text-green-500 font-semibold hover:gap-3 transition-all"
      >
        Ver Proyecto

        <ArrowUpRight size={18} />
      </Link>
    </div>
  );
}