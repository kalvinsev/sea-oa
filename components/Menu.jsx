import React, { useState} from 'react';
import Link from "next/link";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi2"
import { SidebarData } from './SideBar';

export default function Menu(){

    function showSideBar (){
        setSideBar(!sidebar);
    }

    const [sidebar, setSideBar] = useState(false);

    return (
        <div className="navbar">
            <Link href="#" className='link'>
                <HiIcons.HiBars3 onClick={showSideBar} size={25}/>
            </Link>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSideBar}>
                    <div className='list-container'>
                        <li className="navbar-toggle">
                            <Link href="#" className="menu-close">
                                <AiIcons.AiOutlineClose size={22}/>
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link href={item.path} scroll={false}>
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </div>
                    <div className='icons'>
                        <Link href="https://charlyrv84.wixsite.com/charlysgym/services" className='icon'>
                            <AiIcons.AiFillFacebook size={25} color='white'/>
                        </Link>
                        <Link href="https://charlyrv84.wixsite.com/charlysgym/services" className='icon'>
                            <AiIcons.AiOutlineTwitter size={25} color='white'/>
                        </Link>
                        <Link href="https://charlyrv84.wixsite.com/charlysgym/services" className='icon'>
                            <AiIcons.AiOutlineMail size={25} color='white'/>
                        </Link>
                    </div>
                </ul>
                
            </nav>
        </div>
    );
}