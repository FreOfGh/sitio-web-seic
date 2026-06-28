import Image from "next/image";
import Navbar from "@/components/common/navbar";
import Hero from "@/components/home/hero";
import Descripcion from "@/components/home/descripcion";
import Estadisticas from "@/components/home/estadisticas";
import CTFPlatforma from "@/components/home/banner_plataforma_ctf";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <Descripcion />
      <Estadisticas />
      <CTFPlatforma />
    </div>
  );
}
