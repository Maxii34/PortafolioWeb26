"use client";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FaMobileAlt } from "react-icons/fa";

type FormData = {
  nombre: string;
  email: string;
  telefono: string;
  negocio: string;
  mensaje: string;
};

export function ContactSection() {
  const instagran = process.env.NEXT_PUBLIC_INSTAGRAM_URL;
  const numero = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const facebook = process.env.NEXT_PUBLIC_FACEBOOK_URL;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const mensaje = encodeURIComponent(
    "¡Hola! 👋 Vi tu portfolio y me interesa obtener información sobre el desarrollo de una página web para mi negocio. ¿Podemos conversar?",
  );

  const url = `https://wa.me/${numero}?text=${mensaje}`;

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
        {
          from_name: data.nombre,
          from_email: data.email,
          phone: data.telefono,
          business: data.negocio,
          message: data.mensaje,
        },
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!,
      );

      Swal.fire({
        title: "Mensaje enviado",
        text: "Gracias por contactarme. Me pondré en contacto contigo lo antes posible.",
        icon: "success",
        confirmButtonColor: "#A6D63A",
      });

      reset();
    } catch (error) {
      console.error(error);

      Swal.fire({
        title: "Error",
        text: "No se pudo enviar el mensaje. Intenta nuevamente.",
        icon: "error",
        confirmButtonColor: "#A6D63A",
      });
    }
  };

  return (
    <section id="contacto" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="grid gap-10 rounded-2xl border border-[#A6D63A]/20 bg-gradient-to-br from-[#A6D63A]/10 to-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,.35)] sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:rounded-[40px] lg:p-12">
        {/* ================= Formulario ================= */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">
            # Contacto
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
            ¿Listo para tener tu página web?
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
            Contame tu idea y trabajemos juntos para crear un sitio web moderno,
            profesional y adaptado a las necesidades de tu negocio.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <input
                  {...register("nombre", {
                    required: "El nombre es obligatorio",
                  })}
                  className="w-full rounded-xl border border-white/10 bg-[#081826]/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-[#A6D63A] focus:outline-none"
                  placeholder="Nombre"
                />

                {errors.nombre && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.nombre.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("email", {
                    required: "El correo es obligatorio",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Correo inválido",
                    },
                  })}
                  className="w-full rounded-xl border border-white/10 bg-[#081826]/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-[#A6D63A] focus:outline-none"
                  placeholder="Correo electrónico"
                />

                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                {...register("telefono")}
                className="rounded-xl border border-white/10 bg-[#081826]/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-[#A6D63A] focus:outline-none"
                placeholder="Teléfono"
              />

              <input
                {...register("negocio")}
                className="rounded-xl border border-white/10 bg-[#081826]/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-[#A6D63A] focus:outline-none"
                placeholder="Empresa o negocio"
              />
            </div>

            <textarea
              {...register("mensaje", {
                required: "Contame tu proyecto",
              })}
              className="min-h-36 rounded-xl border border-white/10 bg-[#081826]/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-[#A6D63A] focus:outline-none"
              placeholder="Contame tu proyecto..."
            />

            {errors.mensaje && (
              <p className="text-xs text-red-400">{errors.mensaje.message}</p>
            )}

            <button
              disabled={isSubmitting}
              className="mt-2 w-full rounded-xl bg-[#A6D63A] px-8 py-3 font-semibold text-[#081826] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_35px_rgba(166,214,58,0.35)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-fit"
            >
              {isSubmitting ? "Enviando..." : "Solicitar presupuesto"}
            </button>
          </form>
        </div>

        {/* ================= Información ================= */}
        <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#081826]/70 p-6 backdrop-blur-md lg:p-8">
          <div>
            <h3 className="text-2xl font-semibold text-white lg:text-3xl">
              Hablemos de tu proyecto
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Elegí el medio que prefieras. Estoy listo para ayudarte a crear
              una página web moderna que represente profesionalmente a tu
              negocio.
            </p>

            <div className="mt-8 rounded-2xl border border-[#A6D63A]/20 bg-[#A6D63A]/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A6D63A]">
                Contacto directo
              </p>

              <p className="mt-3 flex items-center gap-3 break-words text-2xl font-bold text-white sm:text-3xl">
                <FaMobileAlt className="text-[#A6D63A] text-xl sm:text-2xl" />
                <span>+54 9 381 687 0337</span>
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                También podés completar el formulario y me pondré en contacto a
                la brevedad para conversar sobre tu proyecto.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <p className="mb-5 text-center text-sm uppercase tracking-[0.2em] text-slate-400">
              También podés encontrarme en
            </p>

            <div className="flex justify-center gap-4">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-14 w-14 items-center justify-center rounded-4xl bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_15px_35px_rgba(37,211,102,0.45)] sm:h-16 sm:w-16"
              >
                <FaWhatsapp size={28} />
              </a>

              <a
                href={instagran}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-14 w-14 items-center justify-center rounded-4xl bg-[#E4405F] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_15px_35px_rgba(228,64,95,0.45)] sm:h-16 sm:w-16"
              >
                <FaInstagram size={26} />
              </a>

              <a
                href={facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-14 w-14 items-center justify-center rounded-4xl bg-[#1877F2] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_15px_35px_rgba(24,119,242,0.45)] sm:h-16 sm:w-16"
              >
                <FaFacebookF size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
