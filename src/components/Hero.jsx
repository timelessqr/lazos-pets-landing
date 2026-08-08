// Hero.jsx con fuente Lora usando Tailwind
import React, { useState, useRef, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import {
  FaArrowRight,
  FaInfoCircle,
  FaVolumeUp,
  FaVolumeMute,
  FaWhatsapp
} from 'react-icons/fa';
import { brand, contact, media } from '../config/site';

// Solo mantenemos las sombras de texto que no podemos hacer con Tailwind
const textShadowStyles = `
  .text-shadow-lg {
    text-shadow: 0 2px 4px rgba(0,0,0,0.7), 0 4px 8px rgba(0,0,0,0.7);
  }
  .text-shadow-md {
    text-shadow: 0 2px 4px rgba(0,0,0,0.7);
  }
`;

const Hero = () => {
  
  const videoUrl = media.heroVideo;
  const whatsappUrl = contact.whatsapp;

  const videoRef = useRef(null);
  const [isMutedByUser, setIsMutedByUser] = useState(true);

  // Lógica para Control de Volumen
  const [volume, setVolume] = useState(0.7);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

  const handleToggleMute = () => {
    const nextMutedState = !isMutedByUser;
    setIsMutedByUser(nextMutedState);
    if (videoRef.current) {
      videoRef.current.muted = nextMutedState;
      if (!nextMutedState) {
         videoRef.current.volume = volume;
      }
    }
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      if (newVolume > 0 && videoRef.current.muted) {
         setIsMutedByUser(false);
         videoRef.current.muted = false;
      }
      if (newVolume === 0 && !isMutedByUser) {
         setIsMutedByUser(true);
      } else if (newVolume > 0 && isMutedByUser && !videoRef.current.muted) {
         setIsMutedByUser(false);
      }
    }
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Estilos de sombra de texto */}
      <style dangerouslySetInnerHTML={{ __html: textShadowStyles }} />

      {/* Video de fondo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {/* Contenedor de video con animación */}
        <Motion.div
           initial={{ scale: 1.0 }}
           animate={{
             scale: 1.05,
             y: [0, -10, 0],
           }}
           transition={{
             duration: 20,
             repeat: Infinity,
             repeatType: "reverse"
           }}
           className="h-full w-full"
        >
          <video
            ref={videoRef}
            key={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster={media.heroPoster || undefined}
            src={videoUrl}
          >
            Tu navegador no soporta videos HTML5.
          </video>
        </Motion.div>
      </div>

      {/* Controles de Audio */}
      <div className="absolute bottom-5 right-5 z-30 flex items-center space-x-3 p-2 bg-black/30 rounded-lg border border-white/20 backdrop-blur-sm">
          <button
            onClick={handleToggleMute}
            className="text-white hover:text-gray-300 focus:outline-none transition-colors"
            aria-label={isMutedByUser ? "Activar sonido" : "Silenciar"}
          >
            {(isMutedByUser || volume === 0) ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMutedByUser ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-20 h-1.5 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-400"
            aria-label="Control de volumen"
          />
      </div>

      {/* Contenido del Hero */}
      <div className="container mx-auto px-4 relative z-20">
        <Motion.div
          className="max-w-3xl mx-auto text-center text-white mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Título con fuente Lora */}
          <h1 className="text-4xl md:text-6xl font-lora font-semibold mb-6 text-shadow-lg leading-tight">Mantén Viva Su Memoria Con Nuestros Códigos QR</h1>

          {/* Subtítulo con fuente Lora */}
          <p className="text-xl mb-8 text-shadow-md font-lora">
            {brand.name} transforma la manera de honrar a tu mascota. Cada código QR es una puerta digital a sus fotos, sus videos y los momentos que compartieron.
          </p>

          {/* Botones CTA - SOLO DOS BOTONES */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            {/* Botón principal que lleva a WhatsApp */}
            <Motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-blue hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-lg transition-colors shadow-xl w-full sm:w-auto text-shadow-md border-2 border-white/30 font-lora"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="mr-2" />
              <span className="mr-2 text-base">Crea Su Lazo de Vida</span>
              <Motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, repeatType: "loop" }}
              >
                <FaArrowRight />
              </Motion.span>
            </Motion.a>

            {/* Botón secundario - Cómo funciona */}
            <Motion.a
              href="#como-funciona"
              className="flex items-center justify-center bg-black/50 hover:bg-black/70 border-2 border-white/50 text-white font-medium py-4 px-8 rounded-lg transition-colors shadow-lg w-full sm:w-auto text-shadow-md font-lora"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInfoCircle className="mr-2" />
              <span className="text-base">Cómo Funciona</span>
            </Motion.a>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;
