import Link from "next/link";
import { GitGraphIcon, ArrowUpRight } from "lucide-react";

interface WriteupCardProps {
  title: string;
  category: string;
  description: string;
  github: string;
}

export default function WriteupCard({
  title,
  category,
  description,
  github,
}: WriteupCardProps) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-950 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-green-500">

      <div className="flex items-center justify-between">

        <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-400">
          {category}
        </span>

        <GitGraphIcon className="text-zinc-500 group-hover:text-green-500" size={20} />

      </div>

      <h3 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-5 flex-1 leading-7 text-zinc-400">
        {description}
      </p>

      <Link
        href={github}
        target="_blank"
        className="mt-8 inline-flex items-center gap-2 font-semibold text-green-500 transition hover:gap-3"
      >
        Ver Writeup

        <ArrowUpRight size={18} />
      </Link>

    </div>
  );
}