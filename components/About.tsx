"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Heart, BookOpen } from "lucide-react";

const info = [
  { icon: MapPin, label: "Alamat", value: "Komp. Grya Bandung Asri I Blok E 79-G, Rt.05 Rw.14, Kec. Bojongsoang, Kab. Bandung" },
  { icon: Phone, label: "Telepon", value: "082115992513" },
  { icon: Mail, label: "Email", value: "antosuhartanto88@gmail.com" },
  { icon: Heart, label: "Status", value: "Menikah" },
  { icon: BookOpen, label: "Agama", value: "Islam" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[var(--bg)] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2 className="font-serif-display font-bold text-3xl md:text-5xl text-[var(--text-main)] mb-4">
            Profil Pribadi
          </h2>
          <div className="w-20 h-1 bg-[var(--purple-main)] rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Bio */}
          <motion.div
            className="bg-white rounded-3xl p-8 lg:p-10 premium-shadow"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-serif-display font-bold text-2xl text-[var(--text-main)] mb-6">
              Ringkasan
            </h3>
            <p className="text-[var(--text-muted)] leading-relaxed mb-6">
              Saya adalah profesional di bidang{" "}
              <span className="text-[var(--purple-main)] font-semibold">
                Order Management dan Logistics
              </span>{" "}
              dengan latar belakang S1 Akuntansi dari STIE Pasundan Bandung.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed mb-6">
              Berpengalaman mengelola Purchase Order, Sales Order, Delivery
              Order, serta supervisi logistik lapangan. Terbiasa menggunakan
              sistem ERP Citrix NAV dan Microsoft Office.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Lahir di Bandung, 13 Agustus 1988. Memiliki kemampuan analitis
              yang baik, teliti dalam administrasi, dan terbiasa bekerja di
              lingkungan yang dinamis.
            </p>
          </motion.div>

          {/* Info cards */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {info.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-white rounded-2xl p-5 flex items-start gap-4 premium-shadow border border-gray-50 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-[var(--purple-light)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-[var(--purple-main)]" />
                </div>
                <div>
                  <p className="text-[var(--text-muted)] text-sm mb-1">{label}</p>
                  <p className="text-[var(--text-main)] font-medium leading-tight">{value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
