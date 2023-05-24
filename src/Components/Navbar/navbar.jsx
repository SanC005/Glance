import NavItem from "../NavItem/navItem"
import Image from "next/image";
import Logo from "../../assets/pixel_bg.png";

export default function Navbar(){
    return(
        <div className="flex flex-row justify-between content-center w-full bg-indigo-500 border-solid border-0 border-indigo-800">
            <div className="flex">
                <Image src={Logo} width="100" alt="logo"/>
            </div>
            <div className="flex flex-row justify-between content-center w-1/2 items-center">
                <NavItem text="Home" route={"/"}/> 
                <NavItem text="Bookmarks" route={"Components/Bookmark"}/>
                <NavItem text="About" route={"about"}/>
                <NavItem text="Contact" route={"contact"}/>
            </div>
        </div>
        
    )
}