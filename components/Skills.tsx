"use client";

import { motion } from "framer-motion";
import { Monitor, FileSpreadsheet, Package, Pen } from "lucide-react";

const skillCards = [
  {
    icon: Monitor,
    title: "Sistem & ERP",
    desc: "Terbiasa mengoperasikan System Citrix dan Navision (NAV) untuk pencatatan transaksi penjualan maupun invoicing.",
    color: "var(--purple-main)",
    bg: "var(--purple-glow)",
  },
  {
    icon: FileSpreadsheet,
    title: "Microsoft Office",
    desc: "Mahir menggunakan MS Excel, Word, PowerPoint, Access, dan Outlook untuk pelaporan data logistik.",
    color: "#FF8A00",
    bg: "rgba(255, 138, 0, 0.1)",
  },
  {
    icon: Package,
    title: "Order Management",
    desc: "Menangani pembuatan Purchase Order, Sales Order, dan Delivery Order dengan akurasi tinggi.",
    color: "#00C9A7",
    bg: "rgba(0, 201, 167, 0.1)",
  },
  {
    icon: Pen,
    title: "Design & Teknis",
    desc: "Mampu mengoperasikan software desain teknis dasar seperti AutoCAD, CorelDraw, dan Adobe.",
    color: "#3B82F6",
    bg: "rgba(59, 130, 246, 0.1)",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Decorative background for the section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-[var(--purple-light)]/30 rounded-[3rem] -z-10" />

        <div className="text-center mb-16">
          <motion.h2 
            className="font-serif-display font-bold text-3xl md:text-5xl text-[var(--text-main)] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Keahlian Utama
          </motion.h2>
          <motion.p
            className="text-[var(--text-muted)] max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Kemampuan teknis dan administratif yang mendukung efisiensi operasional.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative -mb-32">
          {skillCards.map((card, i) => (
            <motion.div
              key={card.title}
              className="bg-white rounded-3xl p-8 premium-shadow hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: card.bg }}
              >
                <card.icon size={24} style={{ color: card.color }} />
              </div>
              <h3 className="font-serif-display font-bold text-xl text-[var(--text-main)] mb-3">
                {card.title}
              </h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
