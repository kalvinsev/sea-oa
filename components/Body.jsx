import Image from "next/image";
import React, { useState, useEffect } from 'react';
import MobileBody from "./MobileBody";
import DesktopBody from "./DesktopBody";

export default function Body(){
    const breakpoint = 700;
    // const [screenSize, setScreenSize] = useState(getCurrentDimension());
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
        <div className="body-section">
            {width < breakpoint ? <MobileBody/> : <DesktopBody/>}
        </div>
    );
}