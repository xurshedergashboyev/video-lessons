import styled from 'styled-components';


export const NavbarContainer = styled.div `
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  margin-top: 30px;
  margin-left: 100px;
  @media screen and (max-width: 800px) {
    margin-left: 50px;
  }
`;

export const NavbarItems = styled.div `
  display: flex;
  align-items: center;
  space
`;

export const NavbarLogo = styled.div `
  width: 75px;
  height: auto;
  margin-right: 50px;
  cursor: pointer;
`;

export const NavbarLogoImg = styled.img `
  width: 100%;
  height: 100%;
`;

export const NavbarItem = styled.a `
  margin-right: 50px;
  font-size: 2vw;
  color: #e1e1e1;
  cursor: pointer;
  //transition: .5s ease-in-out;
  text-align: center;
  position: relative;
  transition: all .5s ease-in-out;
  text-decoration: none;
  &:hover {
    color: #fff;
  }

  &:hover:after {
    width: 100%;
  }

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0;
    content: '.';
    color: transparent;
    background: #fff;
    height: 2px;
    transition: all .5s ease-in-out;
  }
`;

