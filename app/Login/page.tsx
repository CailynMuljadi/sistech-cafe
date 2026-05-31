"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  
  // Data State Collection Object
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    age: "",
    favoriteDrink: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Collected User Data Profile:", formData);
    router.push("/menu");
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-[32px] shadow-md border border-gray-100 space-y-6 transition-all duration-300">
        
        {/* Step Indicators */}
        <div className="flex justify-center items-center gap-2">
          <span className={`h-2 rounded-full transition-all duration-300 ${step === 1 ? 'w-8 bg-[#FF74B1]' : 'w-2 bg-gray-200'}`}></span>
          <span className={`h-2 rounded-full transition-all duration-300 ${step === 2 ? 'w-8 bg-[#FF74B1]' : 'w-2 bg-gray-200'}`}></span>
        </div>

        {step === 1 ? (
          /* STEP 1: ACCOUNT ACCESS SECURITY */
          <form onSubmit={handleNext} className="space-y-4">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold tracking-tight text-[#FF74B1] m-0">Welcome Back!</h1>
              <p className="text-sm text-gray-500 font-poppins">Enter credentials to safely connect</p>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700 font-poppins block">Email Address</label>
              <input type="email" name="email" required placeholder="name@example.com" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-2xl border border-gray-300 text-black font-poppins focus:outline-none focus:ring-2 focus:ring-[#FF74B1]" />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700 font-poppins block">Password</label>
              <input type="password" name="password" required placeholder="••••••••" value={formData.password} onChange={handleChange} className="w-full px-4 py-3 rounded-2xl border border-gray-300 text-black font-poppins focus:outline-none focus:ring-2 focus:ring-[#FF74B1]" />
            </div>

            <button type="submit" className="btn-brand w-full py-3 mt-4">Continue &rarr;</button>
          </form>
        ) : (
          /* STEP 2: USER PROFILE PREFERENCES */
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold tracking-tight text-[#FF74B1] m-0">Tell Us About Yourself</h1>
              <p className="text-sm text-gray-500 font-poppins">Help us personalize your coffee experience</p>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700 font-poppins block">Full Name</label>
              <input type="text" name="name" required placeholder="Cailyn Muljadi" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-2xl border border-gray-300 text-black font-poppins focus:outline-none focus:ring-2 focus:ring-[#FF74B1]" />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700 font-poppins block">Age</label>
              <input type="number" name="age" required placeholder="20" min="1" value={formData.age} onChange={handleChange} className="w-full px-4 py-3 rounded-2xl border border-gray-300 text-black font-poppins focus:outline-none focus:ring-2 focus:ring-[#FF74B1]" />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700 font-poppins block">Favorite Cafe Drink</label>
              <select name="favoriteDrink" value={formData.favoriteDrink} onChange={handleChange} className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white text-black font-poppins focus:outline-none focus:ring-2 focus:ring-[#FF74B1]">
                <option value="">Select a drink preference...</option>
                <option value="latte">Iced Café Latte</option>
                <option value="matcha">Ceremonial Matcha Latte</option>
                <option value="americano">Long Black / Americano</option>
                <option value="manual">V60 Pour Over Manual Brew</option>
              </select>
            </div>

            <div className="flex gap-4 pt-2">
              <button type="button" onClick={() => setStep(1)} className="w-1/3 bg-gray-100 text-gray-700 rounded-full font-semibold font-poppins border none hover:bg-gray-200 transition-colors">&larr; Back</button>
              <button type="submit" className="btn-brand flex-1 py-3">Complete Profile</button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}