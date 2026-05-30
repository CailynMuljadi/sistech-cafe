import react from "react";
import Link from "next/link";

const NavBar = () => {
    return (
        <nav className='fixed top-0 w-full flex items-center 
        justify-around py-5 px-24 border-gray-700 bg-black shadow-md z-10'>

            <Link href="/" 
            className="font-poppins font-bold text-brand-pink text-2xl transition duration-300 hover:scale-105">            
            SISTECH CAFE
            </Link>

            <ul className ="flex gap-10 text-lg">
                <Link
                href="Menu"
                className="font-semibold text-brand-black hover:text-brand-pink transition-colors"
                >
                    Menu
                </Link>    
                
                 <Link
                href="About Us"
                className="font-semibold text-brand-black hover:text-brand-pink transition-colors"
                >
                    About Us
                </Link>  

                 <Link
                href="Promo"
                className="font-semibold text-brand-black hover:text-brand-pink transition-colors"
                >
                    Promo
                </Link>  

                 <Link
                href="Login"
                className="font-semibold text-brand-black hover:text-brand-pink transition-colors"
                >
                    Login
                </Link>  
            </ul>    
        </nav>
    )
}    

export default NavBar