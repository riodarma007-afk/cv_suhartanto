"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Order Management & Logistics Staff",
    company: "PT. Siemens Indonesia",
    period: "Agustus 2017 – November 2021",
    desc: [
      "Mengontrol dokumen penagihan dari Forwarder agar tidak ada keterlambatan.",
      "Bertanggung jawab atas administrasi Logistics & Order Management.",
      "Input data harian ke dalam sistem dan memeriksa ketersediaan material di gudang (Pull Ticket).",
      "Membuat Purchase Order, Sales Order, dan Delivery Order.",
      "Filling dokumen harian dengan terorganisir.",
    ],
  },
  {
    title: "Survey Data Processing Staff",
    company: "PT. Survey Sampling Indonesia",
    period: "Februari 2012 – Agustus 2016",
    desc: [
      "Melakukan editing pada lembar kuesioner agar sesuai dengan standar survei.",
      "Coding jawaban terbuka untuk memudahkan analisis data.",
      "Input data ke dalam program komputer (Excel, Access, atau aplikasi internal) dengan akurat.",
    ],
  },
  {
    title: "Administrasi",
    company: "Koperasi Unit Desa (KUD)",
    period: "Mei 2011 – Januari 2012",
    desc: [
      "Mengurus administrasi harian dan membantu operasional logistik pupuk bersubsidi.",
      "Membuat Delivery Order pupuk bersubsidi dan mendata pembagian sesuai kuota.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="font-serif-display font-bold text-3xl md:text-5xl text-[var(--text-main)] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Pengalaman Kerja
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-[var(--purple-main)] mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--purple-light)] before:to-transparent">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[var(--purple-main)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[var(--bg)] p-6 rounded-2xl premium-shadow border border-gray-50">
                <div className="flex flex-col mb-4">
                  <h3 className="font-serif-display font-bold text-xl text-[var(--text-main)]">{exp.title}</h3>
                  <span className="text-[var(--purple-main)] font-medium text-sm mt-1">{exp.company}</span>
                  <span className="text-[var(--text-muted)] text-xs mt-1">{exp.period}</span>
                </div>
                <ul className="text-[var(--text-muted)] text-sm space-y-2 list-disc list-inside">
                  {exp.desc.map((item, j) => (
                    <li key={j} className="leading-relaxed pl-1">{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
