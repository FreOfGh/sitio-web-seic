import Image from "next/image";
import SobreSemilleroCard from "@/components/nosotros/sobresemillero";
import Equipo from "@/components/nosotros/equipo";
export default function Nosotros() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <SobreSemilleroCard />
        <Equipo />
    </div>
  );
}
