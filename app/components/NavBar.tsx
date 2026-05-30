import react from "react";
import Link from "next/link";
import { RiNextjsFill } from "react-icons/ri";

const NavBar = () => {
    return (
        <nav className='fixed top-0 w-full flex items-center 
        justify-around py-5 px-24 border-gray-700 bg-black shadow-md z-10'>

            <Link href="/" className="transtion duration-300 hover:scale-110">            
            <RiNextjsFill size={64} color="#000000" />
            </Link>

            <ul className ="flex gap-10 text-lg">
                <Link
                href="Menu"
                className="text-gray-300 hover:text-brand-pink transition-colors"
                >
                    Menu
                </Link>    
                
                 <Link
                href="About Us"
                className="text-gray-300 hover:text-brand-pink transition-colors"
                >
                    About Us
                </Link>  

                 <Link
                href="Promo"
                className="text-gray-300 hover:text-brand-pink transition-colors"
                >
                    Promo
                </Link>  

                 <Link
                href="Login"
                className="text-gray-300 hover:text-brand-pink transition-colors"
                >
                    Login
                </Link>  
            </ul>    
        </nav>
    )
}    

export default NavBar