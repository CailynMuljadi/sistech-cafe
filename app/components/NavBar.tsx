import react from "react";
import Link from "next/link";

const NavBar = () => {
    return (
        <nav 
        style={{ 
            backgroundColor: '#ffffff', 
            borderBottom: '1px solid #cacaca',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem',
        }}
        className='w-full'>

            <Link href="/" 
            className="nav-logo font-poppins font-bold text-2xl text-brand-pink no-underline">            
            SISTECH CAFE
            </Link>

            <ul className ="flex gap-10 text-lg list-none m-0 p-0">
                <Link
                href="Menu"
                className="font-semibold text-brand-black no-underline hover:text-brand-pink transition-colors"
                >
                    Menu
                </Link>    
                
                 <Link
                href="About Us"
                className="font-semibold text-brand-black no-underline hover:text-brand-pink transition-colors"
                >
                    About Us
                </Link>  

                 <Link
                href="Promo"
                className="font-semibold text-brand-black no-underline hover:text-brand-pink transition-colors"
                >
                    Promo
                </Link>  

                 <Link
                href="Login"
                className="font-semibold px-6 py-3 bg-brand-pink text-brand-white rounded-full shadow-sm 
                transition-all duration-300 transform hover:bg-brand-white hover:text-brand-pink hover:scale-105 cursor-pointer border-none"
                >
                    Login
                </Link>  
            </ul>    
        </nav>
    )
}    

export default NavBar