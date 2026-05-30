import react from "react";
import Link from "next/link";
import { RiNextjsFill } from "react-icons/ri";

const NavBar = () => {
    return (
        <nav className='fixed top-0 w-full flex items-center 
        justify-around py-5 px-24 border-gray-700 bg-black shadow-md z-10'>

            <Link href="/" className="transtion duration-300 hover:scale-110">            
            <RiNextjsFill size={64} color="#fff" />
            </Link>

            <ul className ="flex gap-10 text-lg">
                <Link
                href="menu"
                className="text-gray-300 hover:text-white transition-colors"
                >
                    Menu
                </Link>    
                
                 <Link
                href="aboutus"
                className="text-gray-300 hover:text-white transition-colors"
                >
                    About Us
                </Link>  

                 <Link
                href="promo"
                className="text-gray-300 hover:text-white transition-colors"
                >
                    Promo
                </Link>  

                 <Link
                href="Login"
                className="text-gray-300 hover:text-white transition-colors"
                >
                    Login
                </Link>  
            </ul>    
        </nav>
    )
}    

export default NavBar