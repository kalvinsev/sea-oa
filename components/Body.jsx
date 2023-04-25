import Image from "next/image";
import { useState, useEffect } from 'react';
import MobileBody from "./MobileBody";
import DesktopBody from "./DesktopBody";
export default function Body(){
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
        <div className="body-section">
            {screenSize.width < breakpoint ? <MobileBody/> : <DesktopBody/>}
        </div>
    );
}