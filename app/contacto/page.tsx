import {
  Mail,
  MapPin,
  Phone,
  Clock,
  GitBranch,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-black py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="font-semibold uppercase tracking-widest text-green-500">
            Contáctanos
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Ponte en contacto con nosotros
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-zinc-400">
            ¿Tienes preguntas sobre el semillero, nuestros proyectos o deseas
            unirte? Estaremos encantados de atenderte.
          </p>

        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* Información */}

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10">

            <h3 className="text-2xl font-bold text-white">
              Información de contacto
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              Puedes comunicarte con nosotros a través de cualquiera de los
              siguientes medios.
            </p>

            <div className="mt-10 space-y-8">

              <div className="flex items-start gap-4">
                <Mail className="text-green-500" />
                <div>
                  <p className="font-semibold text-white">
                    Correo electrónico
                  </p>

                  <p className="text-zinc-400">
                    contacto@seic.edu.co
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-green-500" />
                <div>
                  <p className="font-semibold text-white">
                    Teléfono
                  </p>

                  <p className="text-zinc-400">
                    +57 (000) 000 0000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-green-500" />
                <div>
                  <p className="font-semibold text-white">
                    Ubicación
                  </p>

                  <p className="text-zinc-400">
                    Facultad de Ingeniería
                  </p>

                  <p className="text-zinc-400">
                    Universidad de Antioquia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-green-500" />
                <div>
                  <p className="font-semibold text-white">
                    Horario de atención
                  </p>

                  <p className="text-zinc-400">
                    Lunes - Viernes
                  </p>

                  <p className="text-zinc-400">
                    8:00 AM - 5:00 PM
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-12 flex gap-5">

              <a
                href="#"
                className="rounded-full border border-zinc-700 p-3 text-zinc-300 transition hover:border-green-500 hover:text-green-500"
              >
                <GitBranch />
              </a>

            </div>

          </div>

          {/* Formulario */}

          <form className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10">

            <h3 className="text-2xl font-bold text-white">
              Envíanos un mensaje
            </h3>

            <div className="mt-8 space-y-6">

              <input
                type="text"
                placeholder="Nombre completo"
                className="w-full rounded-xl border border-zinc-700 bg-black px-5 py-4 text-white outline-none transition focus:border-green-500"
              />

              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full rounded-xl border border-zinc-700 bg-black px-5 py-4 text-white outline-none transition focus:border-green-500"
              />

              <input
                type="text"
                placeholder="Asunto"
                className="w-full rounded-xl border border-zinc-700 bg-black px-5 py-4 text-white outline-none transition focus:border-green-500"
              />

              <textarea
                rows={6}
                placeholder="Escribe tu mensaje..."
                className="w-full rounded-xl border border-zinc-700 bg-black px-5 py-4 text-white outline-none transition focus:border-green-500"
              />

              <button
                className="w-full rounded-xl bg-green-600 py-4 font-semibold text-white transition hover:bg-green-500"
              >
                Enviar mensaje
              </button>

            </div>

          </form>

        </div>

      </div>
    </section>
  );
}