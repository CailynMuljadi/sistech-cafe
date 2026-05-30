import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-2.5 bg-brand-white"> 
    <div className="flex flex-col items-center text-center space-y-10 max-full">
      <h1 className="w-full font-poppins font-bold text-4xl text-brand-pink tracking-tight sm:text-5xl md:text-6xl">
        SISTECH CAFE
        </h1>
      <p className="text-brand-black font-poppins text-base leading-relaxed max-w-2xl">
         Local Coffee brewed by Extraordinary Women in Indonesia
         </p>
      <Link href="/Menu" className="no-underline">
        <button className="font-poppins font-semibold px-6 py-3 bg-brand-pink text-brand-white rounded-full shadow-sm 
        transition-all duration-300 transform hover:bg-brand-white hover:text-brand-pink hover:scale-105 cursor-pointer border-none">
          See Our Menu
        </button>
      </Link>

       </div>
    </div>
  );
}
