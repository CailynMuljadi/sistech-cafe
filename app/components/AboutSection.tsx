import React from "react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#FF74B1] m-0">
          Our Story
        </h2>
        <p className="text-base text-gray-700 leading-relaxed max-w-2xl mx-auto font-poppins">
          SISTECH CAFE is more than just an ordinary specialty 
          espresso bar. We are a social enterprise dedicated to empowering local female baristas 
          and sourcing ethically grown coffee beans from women-led farming cooperatives across Indonesia.
        </p>
        <div className="pt-2">
          <Link href="/about" className="btn-brand">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}