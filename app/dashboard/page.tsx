"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface ProfileData {
  name: string;
  age: string;
  favoriteDrink: string;
}

export default function DashboardPage() {
  const [profile, setProfile] = useState<ProfileData | null>(null);

  useEffect(() => {
    // Read saved user state parameter fields from local storage
    const storedData = localStorage.getItem("userProfile");
    if (storedData) {
      try {
        setProfile(JSON.parse(storedData));
      } catch (err) {
        console.error("Error reading profile data storage token:", err);
      }
    }
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-[32px] shadow-xl border border-gray-100 text-center space-y-6">
        
        {/* Dynamic Typography Greeting Block */}
        <div className="space-y-2">
          <span className="text-4xl">☕</span>
          <h1 className="text-3xl font-bold tracking-tight text-[#FF74B1] m-0 font-poppins">
            Welcome, {profile?.name || "Premium Member"}!
          </h1>
          <p className="text-sm text-gray-500 font-poppins">
            Your personalized SISTECH member profile dashboard is ready.
          </p>
        </div>

        {/* Member Data Display Card */}
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 text-left space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 m-0 font-poppins">
            Account Preferences
          </h4>
          <p className="text-base text-gray-700 m-0 font-poppins">
            <strong>Age:</strong> {profile?.age || "20"} years old
          </p>
          <p className="text-base text-gray-700 m-0 font-poppins">
            <strong>Preferred Beverage:</strong> {profile?.favoriteDrink || "Iced Café Latte"}
          </p>
          <p className="text-base text-gray-700 m-0 font-poppins">
            <strong>Membership Tier:</strong> Silver Gold VIP Elite ✨
          </p>
        </div>

        {/* Navigation Action Footer Button */}
        <div className="pt-2">
          <Link href="/Menu" className="btn-brand w-full py-3 text-center inline-block no-underline">
            Go to Menu & Order Fresh Brew
          </Link>
        </div>

      </div>
    </div>
  );
}