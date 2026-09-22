"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Award, ExternalLink, X } from "lucide-react";
import certPlaceholderImg from "@/../public/cert-placeholder.jpg";

// Placeholder sertifikat — user dapat mengganti src dengan file gambar asli
const certificates = [
  {
    id: 1,
    title: "Sertifikat 1",
    description: "Upload gambar sertifikat Anda",
    src: certPlaceholderImg,
  },
  {
    id: 2,
    title: "Sertifikat 2",
    description: "Upload gambar sertifikat Anda",
    src: certPlaceholderImg,
  },
];

export default function Certificates() {
  const [selected, setSelected] = useState<(typeof certificates)[0] | null>(null);

  return (
    <section id="certificates" className="py-24 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif-display font-bold text-3xl md:text-5xl text-[var(--text-main)] mb-4">
            Sertifikat & Penghargaan
          </h2>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto text-lg mb-4">
            Pencapaian dan validasi profesional. Klik &quot;View Image&quot; untuk melihat detail.
          </p>
          <div className="w-20 h-1 bg-[var(--purple-main)] mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              className="bg-white rounded-3xl p-6 flex flex-col gap-4 premium-shadow border border-gray-50 group hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-14 h-14 bg-[var(--purple-light)] rounded-2xl flex items-center justify-center">
                <Award size={24} className="text-[var(--purple-main)]" />
              </div>
              <div>
                <h3 className="font-serif-display font-bold text-[var(--text-main)] text-xl mb-2">
                  {cert.title}
                </h3>
                <p className="text-[var(--text-muted)] text-sm">{cert.description}</p>
              </div>
              <button
                onClick={() => setSelected(cert)}
                className="flex items-center gap-2 text-[var(--purple-main)] text-sm font-medium hover:text-[var(--purple-dark)] transition-colors mt-auto pt-4"
              >
                <ExternalLink size={16} />
                View Image
              </button>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
                  <h3 className="font-serif-display font-bold text-[var(--text-main)] text-lg">
                    {selected.title}
                  </h3>
                  <button
                    onClick={() => setSelected(null)}
                    className="w-8 h-8 bg-white hover:bg-gray-100 shadow-sm rounded-full flex items-center justify-center transition-colors"
                  >
                    <X size={16} className="text-[var(--text-main)]" />
                  </button>
                </div>
                <div className="p-6 bg-white flex justify-center">
                  <Image
                    src={selected.src}
                    alt={selected.title}
                    width={800}
                    height={600}
                    className="w-full max-h-[70vh] rounded-xl object-contain border border-gray-100"
                    unoptimized
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
