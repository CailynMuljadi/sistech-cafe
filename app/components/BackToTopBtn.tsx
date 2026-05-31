"use client";

import React, { useEffect, useState } from 'react';
import './BackToTopBtn.css';

export default function BackToTopBtn() {
    const [scroll, setScroll] = useState(0);
    // Added a local state to track when the user's mouse hovers over the asset
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        // Created a named reference function so cleanups remove the listener correctly
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array prevents resetting the listener on every scroll step

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Added smooth behavior control
    };

    return (
        <a
            onClick={backToTop}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ cursor: 'pointer' }}
            className={`back-to-top d-flex align-items-center justify-content-center ${
                scroll > 100 ? 'active' : ''
            }`}
        >
            {/* Swaps the image src string parameter depending on hover states */}
            <img 
                src={isHovered ? "/back-to-top-hover.png" : "/back-to-top-default.png"} 
                alt="Back to top" 
            />
        </a>
    );
}