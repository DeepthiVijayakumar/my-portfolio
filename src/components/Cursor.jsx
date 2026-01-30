import React, { useEffect, useState } from 'react';
import '../styles/Cursor.css';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', updatePosition);

        // Add hover listeners to interactive elements
        const targets = document.querySelectorAll('a, button, .card, .project-card, .cert-card, .skill-category');
        targets.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // MutationObserver to handle dynamically added elements (like mobile menu)
        const observer = new MutationObserver(() => {
            const newTargets = document.querySelectorAll('a, button, .card, .project-card, .cert-card, .skill-category');
            newTargets.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter); // clean up duplicates
                el.removeEventListener('mouseleave', handleMouseLeave);
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            targets.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
            observer.disconnect();
        };
    }, [isVisible]);

    /* Only show custom cursor on non-touch devices */
    if (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) return null;

    return (
        <>
            <div
                className="mouse-cursor"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    opacity: isHovering ? 0 : 1 // Hide dot when hovering
                }}
            />
            <div
                className={`mouse-cursor-follower ${isHovering ? 'hovering' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`
                }}
            />
        </>
    );
};

export default Cursor;
