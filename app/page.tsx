export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-2.5"> 
    <div className="flex flex-col items-center text-center space-y-3 max-w-3xl">
      <h1 className="text-5xl font-poppins font-bold text-brand-pink">
        SISTECH CAFE
        </h1>
      <p className="text-brand-black max-w-md text-center">
         Local Coffee brewed by Extraordinary Women in Indonesia
         </p>
      <button className="font-poppins font-normal px-6 py-3 bg-brand-pink text-brand-white 
      rounded-full hover:bg-brand-white hover:text-brand-pink hover:scale-105 transition-colors cursor-pointer">
        See Our Menu
      </button>

       </div>
    </div>
  );
}
