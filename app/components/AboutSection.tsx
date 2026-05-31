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
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Story Text */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-poppins font-bold tracking-tight text-[#FF74B1] m-0">Our Story</h2>
          <p className="text-base text-gray-700 leading-relaxed font-poppins">
            SISTECH CAFE is more than just an ordinary specialty espresso bar. We are a social enterprise dedicated to empowering local female baristas and sourcing ethically grown coffee beans from women-led farming cooperatives across Indonesia.
          </p>
          <div className="pt-2">
            <Link href="/about" className="btn-brand inline-block text-center no-underline">
              Learn More About Us
            </Link>
          </div>
        </div>

        {/* Right Side: Timeline with Fixed-Scale Graphics */}
        <div className="relative border-l-2 border-dashed border-[#FF74B1]/50 pl-8 ml-4 space-y-8">
          {points.map((point, index) => (
            <div key={index} className="relative">
              {/* Hot Pink Timeline Node Pointer */}
              <span className="absolute -left-[41px] top-7 bg-[#FF74B1] text-white rounded-full w-4 h-4 border-2 border-white shadow-sm"></span>
              
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6 transform hover:scale-[1.02] transition-all duration-300">
                {/* Corrected Fixed Container to prevent image squishing */}
                <div className="relative w-16 h-16 flex-shrink-0 bg-transparent flex items-center justify-center">
                  <Image 
                    src={point.imgSrc} 
                    alt={point.title} 
                    width={64} 
                    height={64} 
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
                
                <div className="space-y-1">
                  <h4 className="text-xl font-poppins font-bold text-black m-0">{point.title}</h4>
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