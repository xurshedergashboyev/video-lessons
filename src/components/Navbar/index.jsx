import {
    NavbarContainer,
    NavbarItems,
    NavbarLogo,
    NavbarLogoImg,
    NavbarItem,
} from "./style";
import logo from '../../assets/images/logo.png';

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
    return (
        <NavbarContainer>
            <NavbarItems>
                <NavbarLogo>
                    <NavbarLogoImg alt="logo" src={logo}/>
                </NavbarLogo>
                {navbarData.map(item =>
                    <NavbarItem href={item.href} key={item.id}>
                        {item.name}
                    </NavbarItem>
                )}
            </NavbarItems>
        </NavbarContainer>
    )
}

export default Navbar;