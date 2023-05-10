
import { useState, useEffect } from "react";
import MobileFooter from "./MobileFooter";
import DesktopFooter from "./DesktopFooter";

export default function Footer() {
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
        <div className="footer-wrapper">
            {width < breakpoint ? <MobileFooter/> : <DesktopFooter/>}
        </div>
    );
}

