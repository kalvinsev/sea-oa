import { useState, useEffect } from "react";

import Link from "next/link";
import * as AiIcons from "react-icons/ai";

export default function MobileFooter (){
    const [isOpen, setIsOpen] = useState(false);

    function checkOpenStatus(){
        let d = new Date();
        let hour = d.getHours();
        let day = d.getDay();
        if((hour > 8 && hour < 21) && (day != 5 || day!= 6)){
            setIsOpen(true);
        }
    }

    useEffect(() => {
        checkOpenStatus();
    },[]);
    return (
        <div className="mobile-footer">
            <div className="additional-info">
                <div className="address-info">
                    <h2>Address</h2>
                    <p><strong>Charly&apos;s gym</strong></p>
                    <p>📍 713 S hoover Ave.<br></br> Los Angeles, CA 90005</p>
                    <p>📞 (323) 608-9517</p>
                </div>
                <div className="hours-info">
                    <div className="open-closed">
                        <h2>Hours</h2>
                        {isOpen ? <p>Open now</p>: <p>Now closed</p>}
                    </div>
                    <p><strong>Mon.-Fri. | 8am - 9pm</strong></p>
                    <p>Sat. - Sun. | Closed</p>
                </div>
                <hr size="1" width="100%" color="#333" />  
                <Link href="https://charlyrv84.wixsite.com/charlysgym/home" className="copyright-content">
                    <AiIcons.AiOutlineCopyrightCircle size={15} className="copyright-icon"/>
                    <p className="copyright-content">2023, Charly&apos;s gym unofficial website</p>
                </Link>
            </div>
        </div>
    );
}