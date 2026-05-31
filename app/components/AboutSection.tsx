import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  const points = [
    { 
      title: "Female Baristas", 
      desc: "Empowering local women through certified professional training programs.",
      imgSrc: "/female-barista.png"
    },
    { 
      title: "Indonesian Heritage", 
      desc: "Honoring traditional cultivation methods handed down through generations.",
      imgSrc: "/indonesian-heritage.png"
    },
    { 
      title: "Ethically Grown Beans", 
      desc: "Sourcing directly from local cooperatives to support smallholder farms.",
      imgSrc: "/coffee-beans.png"
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Core Story Text Block */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-[#FF74B1] m-0">Our Story</h2>
          <p className="text-base text-gray-700 leading-relaxed font-poppins">
            SISTECH CAFE is more than just an ordinary specialty espresso bar. We are a social enterprise dedicated to empowering local female baristas and sourcing ethically grown coffee beans from women-led farming cooperatives across Indonesia.
          </p>
          <div>
            <Link href="/about" className="btn-brand inline-block text-center no-underline">
              Learn More About Us
            </Link>
          </div>
        </div>

        {/* Right Column: Clean Graphic Timeline Tracker */}
        <div className="relative border-l-2 border-dashed border-[#FF74B1]/40 pl-8 ml-4 space-y-6">
          {points.map((point, index) => (
            <div key={index} className="relative">
              {/* Timeline Node Pointer Dot */}
              <span className="absolute -left-[41px] top-6 bg-[#FF74B1] text-white rounded-full w-4 h-4 border-2 border-white shadow"></span>
              
              {/* Timeline Card Container */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5 transform hover:scale-[1.02] transition-all duration-300">
                {/* Responsive Image Wrapper Slot */}
                <div className="relative w-16 h-16 flex-shrink-0 bg-pink-50 rounded-xl overflow-hidden flex items-center justify-center">
                  <Image 
                    src={point.imgSrc} 
                    alt={point.title} 
                    width={56} 
                    height={56} 
                    className="object-contain"
                  />
                </div>
                
                {/* Structured Text Content Block */}
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-black m-0 font-poppins">{point.title}</h4>
                  <p className="text-sm text-gray-500 m-0 leading-normal font-poppins">{point.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}