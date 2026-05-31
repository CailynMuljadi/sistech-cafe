import React from "react";
import HeroSection from "./components/HeroSection";
import PromoSwiper from "./components/PromoSwiper";
import AboutSection from "./components/AboutSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PromoSwiper />
      <AboutSection />
    </>
  );
}