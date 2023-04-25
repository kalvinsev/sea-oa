
import { useState, useEffect } from "react";
import * as AiIcons from "react-icons/ai";
import Link from "next/link";
import MobileFooter from "./MobileFooter";
import DesktopFooter from "./DesktopFooter";

export default function Footer() {
    

    // const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const breakpoint = 700;
  	// function getCurrentDimension(){
    // 	return {
    //   		width: window.innerWidth,
    //   		height: window.innerHeight
    // 	}
  	// }
    
    // useEffect(() => {
    //     const updateDimension = () => {
    //           setScreenSize(getCurrentDimension())
    //     }
    //     window.addEventListener('resize', updateDimension);

    
    //     return(() => {
    //         window.removeEventListener('resize', updateDimension);
    //     })
    // }, [screenSize])
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        // component is mounted and window is available
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        // unsubscribe from the event on component unmount
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <div className="footer-wrapper">
            {width < breakpoint ? <MobileFooter/> : <DesktopFooter/>}
        </div>
    );
}

