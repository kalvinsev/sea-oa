import React, { useState, useEffect } from 'react';
import MobileBody from "./MobileBody";
import DesktopBody from "./DesktopBody";

export default function Body(){
    const breakpoint = 700;  
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <div className="body-section">
            {width < breakpoint ? <MobileBody/> : <DesktopBody/>}
        </div>
    );
}