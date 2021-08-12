import styled from 'styled-components';


export const NavbarContainer = styled.div `
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  margin-top: 30px;
  margin-left: 100px;
`;

export const NavbarItems = styled.div `
  display: flex;
  align-items: center;
  space
`;

export const NavbarLogo = styled.div `
  width: 100px;
  height: auto;
  margin-right: 50px;
  cursor: pointer;
`;

export const NavbarLogoImg = styled.img `
  width: 100%;
  height: 100%;
`;

export const NavbarItem = styled.p `
  margin-right: 50px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  transition: text-decoration .5s ease-in-out;
  &:hover {
    text-decoration: underline;
  }
`;

