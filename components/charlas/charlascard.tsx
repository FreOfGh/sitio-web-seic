import Link from "next/link";
import { Presentation, ArrowUpRight } from "lucide-react";

interface TalkCardProps {
  title: string;
  speaker: string;
  description: string;
  link: string;
}

export default function TalkCard({
  title,
  speaker,
  description,
  link,
}: TalkCardProps) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-950 p-7 transition hover:-translate-y-2 hover:border-green-500">

      <Presentation className="text-green-500" size={32} />

      <h3 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-2 text-green-400">
        {speaker}
      </p>

      <p className="mt-5 flex-1 leading-7 text-zinc-400">
        {description}
      </p>

      <Link
        href={link}
        target="_blank"
        className="mt-8 inline-flex items-center gap-2 font-semibold text-green-500 transition hover:gap-3"
      >
        Ver Material

        <ArrowUpRight size={18} />
      </Link>

    </div>
  );
}