import react from "react";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        /* the main outer wrapper the pink box*/
        <footer className='w-full flex items-center bg-[#FF74B1] text-brand-white
        justify-around py-5 px-24 mt -auto border-none'>
            <div className="flex flex-col items-center text-center justify center space-y-4">
                <div className="flex items-center gap-6 text-2xl">
                    <a href="https://www.instagram.com/c4ilyn_m" 
                    target="_blank" 
                    className="text-brand-white hover:opacity-70 transition-opacity duration-300"
                    rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"
                     className="text-brand-white hover:opacity-70 transition-opacity duration-300"
                     >
                        <FaTwitter />
                    </a>
                    <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer"
                     className="text-brand-white hover:opacity-70 transition-opacity duration-300"
                     >
                        <FaWhatsapp />
                    </a>
                </div>
                /*footer subtext*/
                <p className="font-poppins font-medium text-base tracking-wide text-brand-white m-0">
                    &copy; {new Date().getFullYear()} Made with Love by Cailyn Muljadi.
                </p>

            </div>
        </footer>
    )
}    
