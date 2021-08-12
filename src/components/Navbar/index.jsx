import {
    NavbarContainer,
    NavbarItems,
    NavbarLogo,
    NavbarLogoImg,
    NavbarItem,
} from "./style";
import logo from '../../assets/images/logo vl.png';

const navbarData = [
    {
        id: '1',
        name: 'kurslar',
    },
    {
        id: 2,
        name: 'biz haqimizda'
    },
    {
        id: 3,
        name: "bog'lanish"
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
                    <NavbarItem key={item.id}>
                        {item.name}
                    </NavbarItem>
                )}
            </NavbarItems>
        </NavbarContainer>
    )
}

export default Navbar;