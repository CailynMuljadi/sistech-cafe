import React from "react";
import PromoSwiper from "../components/PromoSwiper";

export default function PromoPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Primary Shared Header Block */}
      <PromoSwiper />
      
      {/* Target Container for Unique Page Sub-Information */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-6 font-poppins text-gray-700">
        <hr className="border-gray-200 my-8" />
        <h3 className="text-2xl font-bold text-black font-poppins">General Usage Rules & Eligibility</h3>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
          <li>Promotional vouchers must be presented to your barista prior to point-of-sale processing.</li>
          <li>Digital tokens and referral codes are non-transferable and cannot be redeemed for cash values.</li>
          <li>Student discount redemptions require verification via an active academic enrollment ID card.</li>
        </ul>
      </div>
    </main>
  );
}