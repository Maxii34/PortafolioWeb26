"use client";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

// Iconos de Interfaz de Usuario (Lucide)
import {
  Send,
  PhoneCall,
  Mail,
  User,
  Building2,
  MessageSquare,
  ExternalLink,
} from "lucide-react";

// Iconos de Redes Sociales (React Icons)
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa6";

type FormData = {
  nombre: string;
  email: string;
  telefono: string;
  negocio: string;
  mensaje: string;
};

export function ContactSection() {
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#";
  const numero = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5493816870337";
  const facebook = process.env.NEXT_PUBLIC_FACEBOOK_URL || "#";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const mensajeWs = encodeURIComponent(
    "¡Hola! 👋 Vi tu sitio web CodeMáx.Dev y me interesa obtener información sobre el desarrollo de una página web para mi negocio. ¿Podemos conversar?",
  );

  const urlWhatsapp = `https://wa.me/${numero}?text=${mensajeWs}`;

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

      // ALERTA PERSONALIZADA DE ÉXITO (ESTILO DARK NEÓN)
      Swal.fire({
        title:
          "<span style='color: #ffffff; font-size: 22px; font-weight: 800;'>¡Mensaje Enviado! 🚀</span>",
        html: "<p style='color: #cbd5e1; font-size: 14px;'>Gracias por escribirnos. Nos pondremos en contacto contigo a la brevedad para conversar sobre tu proyecto.</p>",
        icon: "success",
        iconColor: "#A6D63A",
        background: "#081826",
        confirmButtonText: "Entendido",
        confirmButtonColor: "#A6D63A",
        buttonsStyling: true,
        customClass: {
          popup:
            "border border-[#A6D63A]/40 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl",
          confirmButton:
            "px-6 py-2.5 font-bold text-[#081826] rounded-xl hover:scale-105 transition-all",
        },
      });

      reset();
    } catch (error) {
      console.error(error);

      // ALERTA PERSONALIZADA DE ERROR
      Swal.fire({
        title:
          "<span style='color: #ffffff; font-size: 22px; font-weight: 800;'>Error al enviar ⚠️</span>",
        html: "<p style='color: #cbd5e1; font-size: 14px;'>Ocurrió un inconveniente al enviar tu consulta. Podés reintentar o escribirnos directamente por WhatsApp.</p>",
        icon: "error",
        iconColor: "#ef4444",
        background: "#081826",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#ef4444",
        customClass: {
          popup:
            "border border-red-500/30 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]",
          confirmButton: "px-6 py-2.5 font-bold text-white rounded-xl",
        },
      });
    }
  };

  return (
    <section id="contacto" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* CONTENEDOR PRINCIPAL */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:p-12">
          {/* Luz ambiental */}
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#A6D63A]/10 blur-3xl pointer-events-none" />

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
            {/* ================= 1. FORMULARIO DE CONTACTO ================= */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#A6D63A]/30 bg-[#A6D63A]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#A6D63A]">
                <Mail className="h-3.5 w-3.5" />
                <span>Contacto</span>
              </div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                ¿Listo para hacer crecer{" "}
                <span className="text-[#A6D63A]">tu negocio?</span>
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                Contame sobre tu proyecto y armamos una propuesta personalizada
                adaptada a tus necesidades exactas.
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 space-y-4"
              >
                {/* NOMBRE Y EMAIL */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                      <input
                        {...register("nombre", {
                          required: "El nombre es obligatorio",
                        })}
                        className="w-full rounded-xl border border-white/10 bg-[#081826]/80 pl-10 pr-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-[#A6D63A] focus:outline-none focus:ring-1 focus:ring-[#A6D63A]"
                        placeholder="Tu Nombre *"
                      />
                    </div>
                    {errors.nombre && (
                      <p className="mt-1 text-xs text-red-400 pl-1">
                        {errors.nombre.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                      <input
                        {...register("email", {
                          required: "El correo es obligatorio",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Correo electrónico inválido",
                          },
                        })}
                        className="w-full rounded-xl border border-white/10 bg-[#081826]/80 pl-10 pr-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-[#A6D63A] focus:outline-none focus:ring-1 focus:ring-[#A6D63A]"
                        placeholder="Correo Electrónico *"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400 pl-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* TELÉFONO Y EMPRESA */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="relative">
                    <PhoneCall className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    <input
                      {...register("telefono")}
                      className="w-full rounded-xl border border-white/10 bg-[#081826]/80 pl-10 pr-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-[#A6D63A] focus:outline-none focus:ring-1 focus:ring-[#A6D63A]"
                      placeholder="Teléfono / WhatsApp"
                    />
                  </div>

                  <div className="relative">
                    <Building2 className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    <input
                      {...register("negocio")}
                      className="w-full rounded-xl border border-white/10 bg-[#081826]/80 pl-10 pr-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-[#A6D63A] focus:outline-none focus:ring-1 focus:ring-[#A6D63A]"
                      placeholder="Empresa o Negocio"
                    />
                  </div>
                </div>

                {/* MENSAJE */}
                <div>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    <textarea
                      {...register("mensaje", {
                        required:
                          "Por favor escribí los detalles de tu proyecto",
                      })}
                      className="w-full min-h-[130px] rounded-xl border border-white/10 bg-[#081826]/80 pl-10 pr-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-[#A6D63A] focus:outline-none focus:ring-1 focus:ring-[#A6D63A]"
                      placeholder="Contame detalles de tu proyecto..."
                    />
                  </div>
                  {errors.mensaje && (
                    <p className="mt-1 text-xs text-red-400 pl-1">
                      {errors.mensaje.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#A6D63A] px-8 py-3.5 text-sm font-bold text-slate-900 transition-all duration-300 hover:bg-[#b8ea42] hover:shadow-[0_0_25px_rgba(166,214,58,0.35)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                  <span>
                    {isSubmitting
                      ? "Enviando mensaje..."
                      : "Solicitar Presupuesto"}
                  </span>
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* ================= 2. INFORMACIÓN Y REDES ================= */}
            <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#081826]/80 p-6 backdrop-blur-md lg:p-8">
              <div>
                <h3 className="text-xl font-bold text-white lg:text-2xl">
                  Información Directa
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  ¿Preferís atención inmediata? Podés comunicarte directamente
                  por WhatsApp o redes sociales.
                </p>

                {/* TARJETA DE WHATSAPP DIRECTO */}
                <div className="mt-6 rounded-2xl border border-[#A6D63A]/30 bg-gradient-to-br from-[#A6D63A]/15 to-transparent p-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A6D63A]">
                    Contacto Rápido
                  </span>

                  <p className="mt-2 flex items-center gap-2 text-xl font-extrabold text-white sm:text-2xl">
                    <PhoneCall className="h-5 w-5 text-[#A6D63A]" />
                    <span>+54 9 381 687 0337</span>
                  </p>

                  <a
                    href={urlWhatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-[#20bd5a] hover:shadow-[0_10px_25px_rgba(37,211,102,0.3)]"
                  >
                    <FaWhatsapp className="text-base" />
                    <span>Chatear por WhatsApp</span>
                    <ExternalLink className="h-3.5 w-3.5 ml-auto" />
                  </a>
                </div>
              </div>

              {/* CANALES DE REDES SOCIALES */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  Redes Sociales
                </p>

                <div className="flex justify-center gap-3">
                  <a
                    href={urlWhatsapp}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] transition-all duration-300 hover:bg-[#25D366] hover:text-white hover:scale-110"
                  >
                    <FaWhatsapp className="text-xl" />
                  </a>

                  <a
                    href={instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E4405F]/20 border border-[#E4405F]/40 text-[#E4405F] transition-all duration-300 hover:bg-[#E4405F] hover:text-white hover:scale-110"
                  >
                    <FaInstagram className="text-xl" />
                  </a>

                  <a
                    href="/facebook"
                    aria-label="Facebook"
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1877F2]/20 border border-[#1877F2]/40 text-[#1877F2] transition-all duration-300 hover:bg-[#1877F2] hover:text-white hover:scale-110"
                  >
                    <FaFacebookF className="text-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
