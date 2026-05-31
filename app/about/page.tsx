import React from "react";
import AboutSection from "../components/AboutSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Primary Shared Header Block */}
      <AboutSection />
      
      {/* Target Container for Unique Page Sub-Information */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 font-poppins text-gray-700">
        <hr className="border-gray-200 my-8" />
        <h3 className="text-2xl font-bold text-black font-poppins">Our Long-Term Community Vision</h3>
        <p className="leading-relaxed">
          By working hand-in-hand with agrarian micro-collectives across Sumatra, Java, and Flores, we aim to establish transparent financial frameworks that return higher yield premiums directly to families managing smallholder plots.
        </p>
        <p className="leading-relaxed">
          Through your support, 10% of each purchase funds technical brewing workshops and hospitality scholarships for aspiring young female professionals in Jakarta.
        </p>
      </div>
    </main>
  );
}