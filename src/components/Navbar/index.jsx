import {
    NavbarContainer,
    NavbarItems,
    NavbarLogoImg,
    NavbarItem, NavbarImg, NavbarAnchor,
} from "./style";
import logo from '../../assets/images/logo.png';
import {useState} from "react";
import HoverText from "../Sidebar";
import menuIcon from '../../assets/icons/menu.svg'

const navbarData = [
    {
        id: '1',
        name: 'kurslar',
        href: '#courses'
    },
    {
        id: 2,
        name: 'biz haqimizda',
        href: '#about-us'
    },
    {
        id: 3,
        name: "bog'lanish",
        href: '#contact'
    }
];


const Navbar = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <NavbarContainer>
            <NavbarItems>
                {/*<NavbarLogo>*/}
                    <NavbarAnchor href="/">
                        <NavbarLogoImg alt="logo" src={logo}/>
                    </NavbarAnchor>
                {/*</NavbarLogo>*/}
                {navbarData.map(item =>
                    <NavbarItem href={item.href} key={item.id}>
                        {item.name}
                    </NavbarItem>
                )}
                <HoverText callback={() => setOpen(!open)} isOpen={open} setIsOpen={setOpen}/>
            </NavbarItems>
            <NavbarImg src={menuIcon} onClick={handleOpen}/>
        </NavbarContainer>
    )
}

export default Navbar;