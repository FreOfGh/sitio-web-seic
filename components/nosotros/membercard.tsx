import Image from "next/image";
import { Mail } from "lucide-react";

interface MemberCardProps {
  image: string;
  name: string;
  role: string;
  email: string;
}

export default function MemberCard({
  image,
  name,
  role,
  email,
}: MemberCardProps) {
  return (
    <div className="group rounded-3xl border border-zinc-800 bg-zinc-950 p-8 text-center transition hover:border-green-500 hover:-translate-y-2">

      <div className="mx-auto h-36 w-36 overflow-hidden rounded-full border-4 border-green-500">

        <Image
          src={image}
          alt={name}
          width={150}
          height={150}
          className="h-full w-full object-cover"
        />

      </div>

      <h3 className="mt-6 text-2xl font-semibold text-white">
        {name}
      </h3>

      <p className="mt-2 text-green-500">
        {role}
      </p>

      <div className="mt-5 flex items-center justify-center gap-2 text-zinc-400">

        <Mail size={16} />

        <a
          href={`mailto:${email}`}
          className="hover:text-green-500"
        >
          {email}
        </a>

      </div>

    </div>
  );
}