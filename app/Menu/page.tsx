"use client";
import React, { useState } from "react";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Coffee", "Non-Coffee", "Pastries"];

  const menuItems = [
    { id: 1, name: "Sistech Signature Latte", category: "Coffee", price: "Rp 38.000", desc: "Our secret house espresso blend with creamy oatmilk and sweet brown palm sugar." },
    { id: 2, name: "V60 Flores Bajawa", category: "Coffee", price: "Rp 35.000", desc: "Clean, light-bodied manual brew coffee with notes of chocolate and sweet melon." },
    { id: 3, name: "Ceremonial Matcha Latte", category: "Non-Coffee", price: "Rp 40.000", desc: "Premium grade Japanese stone-ground matcha whisked smoothly with fresh vanilla milk." },
    { id: 4, name: "Iced Hibiscus Berry Tea", category: "Non-Coffee", price: "Rp 32.000", desc: "Refreshing floral iced tea brewed with sweet strawberries and fresh mint leaves." },
    { id: 5, name: "Almond Butter Croissant", category: "Pastries", price: "Rp 28.000", desc: "Flaky, golden-baked French pastry layered with rich almond frangipane cream." },
    { id: 6, name: "Pink Velvet Cinnamon Roll", category: "Pastries", price: "Rp 30.000", desc: "Soft, warm cinnamon dough swirled with premium cream cheese frosting and beet-juice icing." },
  ];

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header Block */}
        <div className="text-center space-y-3">
          <h1 className="text-5xl font-poppins font-bold tracking-tight text-[#FF74B1] m-0">Our Specialty Menu</h1>
          <p className="text-base text-gray-500 font-poppins max-w-md mx-auto">
            Handcrafted with ethically sourced Indonesian coffee beans and fresh artisanal ingredients.
          </p>
        </div>

        {/* Category Filter Pills Container */}
        <div className="flex justify-center items-center gap-3 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              style={{
                backgroundColor: activeCategory === category ? "#FF74B1" : "#ffffff",
                color: activeCategory === category ? "#ffffff" : "#000000",
                border: activeCategory === category ? "none" : "1px solid #e5e7eb"
              }}
              className="px-6 py-2 rounded-full font-poppins font-semibold text-sm transition-all duration-300 shadow-sm hover:scale-105"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamic Products Cards Grid Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow duration-300"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-xl font-poppins font-bold text-black m-0 leading-tight">{item.name}</h3>
                  <span className="text-base font-poppins font-bold text-[#FF74B1] flex-shrink-0">{item.price}</span>
                </div>
                <p className="text-sm text-gray-500 font-poppins leading-relaxed">{item.desc}</p>
              </div>
              
              <div className="pt-2 flex justify-between items-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 font-poppins px-3 py-1 bg-gray-50 rounded-md">
                  {item.category}
                </span>
                <button className="btn-brand text-xs px-4 py-2 rounded-full font-semibold">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}