//styles
import {
    Mask,
    NavbarWrapper,
    NavItems,
    CloseIcon,
    NavbarPhoneButton,
    NavbarPhoneIcon,
    NavbarPhoneNumber,
    Attr
} from "./style";
import phoneIcon from "../../assets/icons/phone.svg";
// icon
const closeIcon  = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Fclose.svg?alt=media&token=971022d0-16a5-44d1-9d73-597fed64a654'

const  Sidebar = ({isOpen, callback}) => {
    const isHidden = !!isOpen;

    return (
        <NavbarWrapper isOpen={isOpen} aria-hidden={!isHidden}>
            <NavItems>
                <Mask onClick={callback}>
                    <Attr href="#courses">
                        - kurslar
                    </Attr>
                </Mask>
                <Mask onClick={callback}>
                    <Attr href="#about-us">
                        - biz haqimizda
                    </Attr>
                </Mask>
                <Mask onClick={callback}>
                    <Attr href="#contact">
                        - bog'lanish
                    </Attr>
                </Mask>
                <Mask onClick={callback} >
                    <NavbarPhoneButton>
                        <NavbarPhoneIcon src={phoneIcon}/>
                        <NavbarPhoneNumber href="tel: +9989555000109">
                            55 500 01 09
                        </NavbarPhoneNumber>
                    </NavbarPhoneButton>
                </Mask>
            </NavItems>
            <div>
                <CloseIcon  width={50} height={50} src={closeIcon} alt="close" onClick={callback}/>
            </div>
        </NavbarWrapper>
    )
}

export default Sidebar;
