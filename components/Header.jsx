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