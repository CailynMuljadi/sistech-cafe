import React from "react";
import AboutSection from "../components/AboutSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutSection />
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-6 font-poppins text-gray-700">
        <hr className="border-gray-200 my-8" />
        <h3 className="text-2xl font-bold text-black">Our Long-Term Community Vision</h3>
        <p>
          By working hand-in-hand with agrarian micro-collectives across Sumatra, Java, and Flores, we aim to establish transparent financial frameworks that return higher yield premiums directly to families managing smallholder plots.
        </p>
      </div>
    </main>
  );
}