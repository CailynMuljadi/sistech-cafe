"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";

export default function PromoSwiper() {
  const containerRef = useRef<HTMLDivElement>(null);

  const basePromos = [
    { id: 1, title: "Buy 1 Get 1 Free", desc: "Every Friday on all espresso blends.", code: "FRIDAYBLISS" },
    { id: 2, title: "Student Discount", desc: "Show your ID for 20% off manual brews.", code: "SISTECHSTUDENT" },
    { id: 3, title: "Morning Rush", desc: "Free pastry with any large latte before 9 AM.", code: "EARLYBIRD" },
  ];

  // Triplicate array items to create a continuous infinite layout loop buffer
  const promos = [...basePromos, ...basePromos, ...basePromos];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let intervalId: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          intervalId = setInterval(() => {
            // Safe loop reset point: when it scrolls past the first set, snap back invisibly
            if (container.scrollLeft >= container.scrollWidth / 3) {
              container.scrollLeft = 0;
            }
            container.scrollBy({ left: 320, behavior: "smooth" });
          }, 2500);
        } else {
          clearInterval(intervalId);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => {
      clearInterval(intervalId);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="w-full bg-white py-12 px-6 border-b border-gray-100">
      <div className="max-w-6xl mx-auto space-y-6">
        
        <div className="flex justify-between items-end">
          <h2 className="text-3xl font-poppins font-bold text-[#FF74B1] m-0">Active Promotions</h2>
          
          {/* Fixed: Added transition, text color toggle, and scale behavior */}
          <Link 
            href="/promo" 
            className="text-base font-poppins font-semibold text-black hover:text-[#FF74B1] hover:scale-105 no-underline transition-all duration-300 transform inline-block"
          >
            View All Promos &rarr;
          </Link>
        </div>

        {/* Scroll Track */}
        <div 
          ref={containerRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory"
        >
          {promos.map((promo, idx) => (
            <div 
              key={`${promo.id}-${idx}`} 
              className="min-w-[300px] sm:min-w-[360px] bg-white border border-gray-100 p-6 rounded-3xl snap-start shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h3 className="text-2xl font-poppins font-bold text-black m-0">{promo.title}</h3>
                <p className="text-sm text-gray-600 font-poppins">{promo.desc}</p>
              </div>
              <div className="bg-gray-50 border border-dashed border-[#FF74B1] rounded-2xl py-3 px-4 text-center">
                <span className="text-xs text-gray-400 font-poppins uppercase block mb-1">Use Code</span>
                <span className="text-base font-poppins font-bold text-[#FF74B1] tracking-wider">{promo.code}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}