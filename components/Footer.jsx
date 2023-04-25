
import { useState, useEffect } from "react";
import * as AiIcons from "react-icons/ai";
import Link from "next/link";
import MobileFooter from "./MobileFooter";
import DesktopFooter from "./DesktopFooter";

export default function Footer() {
    

    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const breakpoint = 700;
  	function getCurrentDimension(){
    	return {
      		width: window.innerWidth,
      		height: window.innerHeight
    	}
  	}
    
    useEffect(() => {
        const updateDimension = () => {
              setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);

    
        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])

    return (
        <div className="footer-wrapper">
            {screenSize.width < breakpoint ? <MobileFooter/> : <DesktopFooter/>}
        </div>
    );
}

