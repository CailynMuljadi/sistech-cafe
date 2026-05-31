import react from "react";
import Link from "next/link";

const NavBar = () => {
    return (
        <nav 
        style={{ 
            backgroundColor: '#ffffff', 
            borderBottom: '1px solid #cacaca',
            height: '103px',
        }}
        className='w-full px-5 py-4 flex justify-between items-center sticky top-0 z-50'>

            <Link href="/" 
            className="nav-logo font-poppins font-bold text-2xl text-brand-pink no-underline">            
            SISTECH CAFE
            </Link>

            <ul className ="flex gap-10 text-lg list-none m-0 p-0">
                <Link
                href="/menu"
                className="font-semibold text-brand-black no-underline hover:text-brand-pink transition-colors"
                >
                    Menu
                </Link>    
                
                 <Link
                href="/about"
                className="font-semibold text-brand-black no-underline hover:text-brand-pink transition-colors"
                >
                    About Us
                </Link>  

                 <Link
                href="/Promo"
                className="font-semibold text-brand-black no-underline hover:text-brand-pink transition-colors"
                >
                    Promo
                </Link>  

                 <Link
                href="/Login"
                className="btn-brand"
                >
                    Login
                </Link>  
            </ul>    
        </nav>
    )
}    

export default NavBar