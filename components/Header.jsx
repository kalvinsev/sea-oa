import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "./Menu";

export default function Header(){
    return (
        <div className="header">
            <div className="menu-button">
                <Menu />
            </div>
            <img src="logo.png"/>
            <div></div>
        </div>
    )
}