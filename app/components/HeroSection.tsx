import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section 
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      className="w-full min-h-[85vh] bg-cover bg-center flex items-center justify-center px-4 py-12"
    >
      <div className="glass-panel-animate max-w-2xl w-full bg-white/40 backdrop-blur-md p-8 md:p-12 rounded-[32px] border-2 border-white/60 shadow-xl text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold tracking-tight text-[#FF74B1]">
          SISTECH CAFE
        </h1>
        <p className="text-base sm:text-lg text-black font-medium max-w-md mx-auto font-poppins">
          Local Coffee brewed by Extraordinary Women in Indonesia.
        </p>
        <div className="pt-2">
          {/* Linked perfectly to the menu page route */}
          <Link href="/menu" className="btn-brand inline-block text-center no-underline">
            See Our Menu
          </Link>
        </div>
      </div>
    </section>
  );
}