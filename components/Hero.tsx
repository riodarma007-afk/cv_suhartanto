"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Building2, MapPin } from "lucide-react";
import antoImg from "@/../public/anto.jpg";

export default function Hero() {
  const handleContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector("#contact");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[var(--bg)]"
    >
      {/* Abstract Background Shapes */}
      <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] bg-[var(--orange-accent)] opacity-10 blur-[80px] rounded-full pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-1/4 left-[10%] w-[600px] h-[600px] bg-[var(--purple-main)] opacity-10 blur-[100px] rounded-full pointer-events-none mix-blend-multiply" />
      
      {/* Right side large geometric shape behind photo */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[5%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-[var(--purple-main)] rounded-full -z-10 hidden lg:block" />
      <div className="absolute top-1/2 -translate-y-1/2 right-[3%] w-[35vw] h-[35vw] max-w-[400px] max-h-[400px] bg-[var(--orange-accent)] rounded-full -z-20 hidden lg:block translate-x-20 translate-y-20" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Text Content */}
          <motion.div
            className="flex-1 max-w-2xl text-center lg:text-left pt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-serif-display font-bold text-[3rem] sm:text-[4rem] lg:text-[4.5rem] leading-[1.1] mb-6 text-[var(--text-main)] tracking-tight">
              Order Management <br />
              & Logistics <br />
              <span className="text-[var(--purple-main)]">Professional.</span>
            </h1>

            <p className="text-[var(--text-muted)] text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
              Suhartanto. S1 Akuntansi dari STIE Pasundan. Berpengalaman dalam supervisi logistik, pemrosesan data, dan efisiensi operasional.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-0 bg-white rounded-xl p-2 shadow-lg border border-gray-100 max-w-md mx-auto lg:mx-0">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 w-full bg-transparent px-4 py-3 outline-none text-[var(--text-main)] text-sm"
                readOnly
              />
              <a
                href="#contact"
                onClick={handleContact}
                className="w-full sm:w-auto flex items-center justify-center bg-[var(--purple-main)] hover:bg-[var(--purple-dark)] text-white font-medium px-8 py-3.5 rounded-lg transition-colors whitespace-nowrap"
              >
                Hire Me
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              <a
                href="/cv_suhartanto/CV_Suhartanto.docx"
                download
                className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--purple-main)] transition-colors font-medium text-sm group"
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[var(--purple-light)] flex items-center justify-center transition-colors">
                  <Download size={14} />
                </div>
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right Image Content */}
          <motion.div
            className="flex-1 relative flex justify-center lg:justify-end w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full max-w-[450px] aspect-[4/5]">
              {/* Main Photo Mask */}
              <div className="absolute inset-0 rounded-[40px] overflow-hidden">
                <Image
                  src={antoImg}
                  alt="Suhartanto"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>

              {/* Floating Badge 1 - Top Left */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute top-12 -left-6 md:-left-12 bg-white rounded-2xl p-4 premium-shadow flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 bg-[var(--purple-light)] rounded-full flex items-center justify-center overflow-hidden">
                  <Image src={antoImg} alt="Avatar" width={48} height={48} className="object-cover object-top" />
                </div>
                <div>
                  <p className="font-serif-display font-bold text-[var(--text-main)] text-sm">Suhartanto</p>
                  <p className="text-[var(--text-muted)] text-[11px]">Logistics Staff</p>
                  <div className="flex gap-0.5 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-[#FF8A00] text-[10px]">★</span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-16 -right-4 md:-right-12 bg-white rounded-2xl p-4 premium-shadow flex items-center gap-4 z-20"
              >
                <div className="w-10 h-10 bg-[#FF8A00]/10 rounded-full flex items-center justify-center">
                  <Building2 size={20} className="text-[#FF8A00]" />
                </div>
                <div>
                  <p className="font-serif-display font-bold text-[var(--text-main)] text-sm leading-tight">3 Companies<br/>Experience</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
