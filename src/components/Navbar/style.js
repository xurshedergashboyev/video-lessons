import styled from 'styled-components';


export const NavbarContainer = styled.div `
  width: 80%;
  display: flex;
  align-items: center;
  background-color: transparent;
  margin-top: 30px;
  margin-left: 100px;
  @media screen and (max-width: 800px) {
    margin-left: 50px;
    width: 100%;
  }
`;

export const NavbarItems = styled.div `
  display: flex;
  align-items: center;
  @media screen and (max-width: 800px) {
    justify-content: space-between;
  }
`;

export const NavbarLogo = styled.div `
  width: 75px;
  height: auto;
  margin-right: 50px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    width: 50px;
    height: 50px;
    margin-top: 10px;
  }
`;

export const NavbarAnchor = styled.a `
  width: 75px;
  height: auto;
  margin-right: 50px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    width: 50px;
    height: auto;
    margin-top: 10px;
  }
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
  
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavbarImg = styled.img `
  display: none;
  @media screen and (max-width: 900px) {
    display: flex;
    position: absolute;
    top: 30px;
    right: 45px;
    width: 30px;
    height: 50px;
    cursor: pointer;
  }
`;