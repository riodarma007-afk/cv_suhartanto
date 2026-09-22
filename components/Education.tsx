"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[var(--bg)] relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          
          <div className="flex-1 text-center md:text-left">
            <motion.h2 
              className="font-serif-display font-bold text-3xl md:text-5xl text-[var(--text-main)] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              Pendidikan Formal
            </motion.h2>
            <motion.p
              className="text-[var(--text-muted)] text-lg mb-8 max-w-md mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Latar belakang akademis yang membentuk pola pikir analitis dan sistematis.
            </motion.p>
          </div>

          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white rounded-3xl p-8 premium-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--purple-glow)] rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[var(--purple-light)] flex items-center justify-center shrink-0">
                  <GraduationCap className="text-[var(--purple-main)]" size={24} />
                </div>
                <div>
                  <h3 className="font-serif-display font-bold text-2xl text-[var(--text-main)] mb-2">
                    S1 Akuntansi
                  </h3>
                  <div className="text-[var(--purple-main)] font-medium mb-1">
                    Sekolah Tinggi Ilmu Ekonomi Pasundan
                  </div>
                  <div className="flex items-center gap-1.5 text-[var(--text-muted)] text-sm mb-4">
                    <MapPin size={14} />
                    <span>Bandung</span>
                  </div>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                    Menyelesaikan studi S1 pada jurusan Akuntansi. Pendidikan ini membekali kemampuan dalam pengelolaan data, pencatatan transaksi, serta analisis laporan yang sangat berguna dalam bidang Order Management dan administrasi logistik.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
