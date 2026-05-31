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
            style={{ 
                cursor: 'pointer',
                width: '20px',              // Fixed small width
                height: '20px',             // Fixed small height (matching width makes it a perfect square)
                borderRadius: '50%',        // Forces the button container to be fully rounded/circle
                overflow: 'hidden',         // Prevents the image from spilling outside the circle
                padding: '0px',             // Removes any extra internal spacing squeezing the asset
                display: scroll > 100 ? 'flex' : 'none', // Syncs visibility condition cleanly with inline flex alignment
            }}
            className={`back-to-top d-flex align-items-center justify-content-center ${
                scroll > 100 ? 'active' : ''
            }`}
        >
            {/* Swaps the image src string parameter depending on hover states */}
            <img 
                src={isHovered ? "/back-to-top-hover.png" : "/back-to-top-default.png"} 
                alt="Back to top" 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }} // Ensures the image fills the circular container without distortion
            />
        </a>
    );
}