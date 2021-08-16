import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  transform: ${({isOpen}) => (isOpen ? "translateY(0)" : "translateY(-100%)")};
  width: 100vw;
  height: 100vh;
  background-color: #618bef;
  //opacity: .5;
  transition: .5s;
  z-index: 10000;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  font-family: "Couture Bold", sans-serif;
  //flex-direction: column;
`;

export const NavItems = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-top: 50px;
  @media screen and (max-width: 600px) {
    margin-top: 50px;
    margin-left: 25px;
    width: 70%;
  }
`

export const Mask = styled.div `
  margin: 0 0 25px 0;
`

export const Attr = styled.a `
  margin-bottom: 0;
  margin-top: 0;
  position: relative;
  display: inline-block;
  font-size: 10vmin;
  letter-spacing: -0.03em;
  background: radial-gradient(circle 100px at var(--x, 0) var(--y, 0), #747474 99%, #f6f6f6 100%) fixed;
  -webkit-background-clip: text;
  color: #fff;
  -webkit-text-fill-color: transparent;
  transition: all 0.5s ease-in-out;
`;

export const CloseIcon = styled.img`
  margin-top: 20px;
  width: 30px;
  height: 30px;
  margin-right: 50px;
  @media screen and (max-width: 700px) {
    margin-top: 10px;
    margin-right: 0;
  }
`;

export const CloseIconContainer = styled.div `
  cursor: pointer;
`;

export const NavbarPhoneButton = styled.button`
  background-color: #2a2850;
  box-shadow: 0 11px 41px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 250px;
  height: 50px;
  margin-right: 75px;
  padding: 10px;
  border: none;
  //position: absolute;
  //top: 40px;
  //right: 30px;
  cursor: pointer;
  border-radius: 12px;
  transition: .3s ease-in-out;
  &:hover {
    box-shadow: 0 11px 41px 0 rgba(0, 0, 0, 0.5);
  }
`;

export const NavbarPhoneIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

export const NavbarPhoneNumber = styled.a`
  font-size: 25px;
  color: #fff;
  text-decoration: none;
`;
