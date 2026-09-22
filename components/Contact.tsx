"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
// import emailjs from '@emailjs/browser'; // Uncomment if using EmailJS

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate sending for now
    setTimeout(() => {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);

    /* EmailJS Implementation (uncomment and fill IDs when ready)
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.currentTarget, 'YOUR_PUBLIC_KEY')
      .then(() => {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 3000);
      }, (error) => {
        console.error(error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      });
    */
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-[var(--bg)] rounded-[3rem] p-8 md:p-16 premium-shadow relative overflow-hidden">
          {/* Decorative Blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--purple-main)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="flex flex-col md:flex-row gap-16 relative z-10">
            {/* Left: Info */}
            <div className="flex-1">
              <motion.h2 
                className="font-serif-display font-bold text-3xl md:text-5xl text-[var(--text-main)] mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                Get in Touch.
              </motion.h2>
              <motion.p
                className="text-[var(--text-muted)] text-lg mb-10 max-w-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Tertarik untuk bekerja sama atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya.
              </motion.p>

              <div className="space-y-6">
                {[
                  { icon: Mail, text: "antosuhartanto88@gmail.com", href: "mailto:antosuhartanto88@gmail.com" },
                  { icon: Phone, text: "0821 1599 2513", href: "https://wa.me/6282115992513" },
                  { icon: MapPin, text: "Bandung, Jawa Barat", href: null },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center premium-shadow group-hover:scale-110 transition-transform">
                      <item.icon className="text-[var(--purple-main)]" size={20} />
                    </div>
                    {item.href ? (
                      <a href={item.href} className="text-[var(--text-main)] font-medium hover:text-[var(--purple-main)] transition-colors">
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-[var(--text-main)] font-medium">{item.text}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <motion.div 
              className="flex-1 bg-white rounded-3xl p-8 premium-shadow"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium text-[var(--text-main)] mb-1.5">Nama Lengkap</label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--purple-main)] focus:bg-white transition-all text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium text-[var(--text-main)] mb-1.5">Email</label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--purple-main)] focus:bg-white transition-all text-sm"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--text-main)] mb-1.5">Pesan</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--purple-main)] focus:bg-white transition-all text-sm resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[var(--purple-main)] hover:bg-[var(--purple-dark)] text-white font-medium py-3.5 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md shadow-[var(--purple-glow)]"
                >
                  {status === "idle" && "Kirim Pesan"}
                  {status === "sending" && "Mengirim..."}
                  {status === "success" && "Pesan Terkirim!"}
                  {status === "error" && "Gagal Mengirim"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
