"use client";

import React, {useRef, useEffect} from "react";
import Link from "next/link";

export default function PromoSwiper() {
const containerRef = useRef<HTMLDivElement>(null);


  const promos = [
    { id: 1, title: "Buy 1 Get 1 Free", desc: "Every Friday on all espresso blends.", code: "FRIDAYBLISS" },
    { id: 2, title: "Student Discount", desc: "Show your ID for 20% off manual brews.", code: "SISTECHSTUDENT" },
    { id: 3, title: "Morning Rush", desc: "Free pastry with any large latte before 9 AM.", code: "EARLYBIRD" },
    { id: 4, title: "Weekend Brunch", desc: "15% off total bill with two main courses.", code: "WEEKEND15" },
    { id: 5, title: "Eco Cup Discount", desc: "Bring your reusable tumbler for a flat discount.", code: "GOGREEN" }
  ];

  useEffect(() => {
  const container = containerRef.current;
  if (!container) return;

  let intervalId: NodeJS.Timeout;
  // Intersection Observer monitors screen scroll position
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          intervalId = setInterval(() => {
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
              container.scrollTo({ left: 0, behavior: "smooth" });
            } else {
              container.scrollBy({ left: 300, behavior: "smooth" });
            }
          }, 3000); // Transitions every 3 seconds
        } else {
          clearInterval(intervalId);
        }
      },
      { threshold: 0.2 }
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
          <h2 className="text-2xl font-bold tracking-tight text-[#FF74B1] m-0">
            Active Promotions
          </h2>
          <Link href="/promo" className="text-sm font-semibold text-black hover:text-[#FF74B1] no-underline transition-colors">
            View All Promos &rarr;
          </Link>
        </div>

        {/* Scrollable Horizontal Container */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin snap-x snap-mandatory">
          {promos.map((promo) => (
            <div 
              key={promo.id}
              className="min-w-[280px] sm:min-w-[350px] bg-gray-50 border border-gray-200 p-6 rounded-2xl snap-start flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-black m-0">{promo.title}</h3>
                <p className="text-sm text-gray-600 font-poppins">{promo.desc}</p>
              </div>
              <div className="bg-white border border-dashed border-[#FF74B1] rounded-xl py-2 px-4 text-center">
                <span className="text-xs text-gray-400 font-poppins uppercase block">Use Code</span>
                <span className="text-sm font-bold text-[#FF74B1] tracking-wider">{promo.code}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}