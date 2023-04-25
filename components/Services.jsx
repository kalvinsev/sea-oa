import { useState, useEffect } from 'react';
import MobileServices from './MobileServices';
import DesktopServices from './DesktopServices';
export default function Services () {
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
        <div className="services-section" id="services">
            <div className="services-header">
                <span>Services and fitness programs</span>
            </div>
            {width < breakpoint ? <MobileServices/> : <DesktopServices/>}
            <div className='placeholder-img'>
                <img src="placeholder-img.webp" />
                <input type="text" placeholder="get started today" className='get-started'></input>
            </div>
        </div>
    );
}
