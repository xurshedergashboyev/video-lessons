import styled from 'styled-components'
import web from '../../assets/images/web-.jpg'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const FlexContainer = styled.div`
  display: flex;
  height: 100%;
`

export const LeftContainer = styled.div`
  width: 60%;
  height: 100%;
  background-color: #2a2850;
  position: relative;
`;

export const CtaContainer = styled.div`
  margin-left: 100px;
  margin-top: 150px;
  width: 80%;
  line-height: 1;
`;

export const CtaHeader = styled.h1`
  font-size: 90px;
  color: #fff;
  margin-bottom: 10px;
  line-height: 1;
`;

export const CtaDesc = styled.p`
  font-size: 30px;
  color: #fff;
`;

export const CtaButton = styled.button`
  position: relative;
  width: 250px;
  height: 50px;
  font-size: 25px;
  display: flex;
  align-items: center;
  background-color: #2a2850;
  box-shadow: 0 31px 41px 0 rgba(0, 0, 0, 0.3);
  outline: none;
  border: none;
  color: #fff;
  padding: 20px;
  margin-top: 50px;
  //display: flex;
  z-index: 99999;
  border-radius: 12px;
  &:before {
    content: '';
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #97d0ee;
    top: -50%;
    right: -10%;
    //z-index: 1;
  }

  &:after {
    position: absolute;
    content: '';
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #618bef;
    bottom: -50%;
    left: -10%;
    z-index: 1;
  }
`;

export const Icon = styled.img `
  width: 30px;
  height: 30px;
  margin-left: 10px;
`;

export const BigCircle = styled.div `
  position: absolute;
  background-color: #4b65b2;
  width: 150px;
  height: 150px;
  top: 20%;
  right: -8%;
  border-radius: 50%;
`;

export const MediumCircle = styled.div `
  position: absolute;
  background-color: #638df3;
  width: 100px;
  height: 100px;
  bottom: 0;
  right: -5%;
  border-radius: 50%;
`;

export const Rectangle = styled.div `
  position: absolute;
  background-color: #4b5a81;
  opacity: .7;
  bottom: 0;
  right: 0;
  width: 200px;
  height: 100px;
`;

export const RightContainer = styled.div`
  width: 40%;
  height: 100%;
  background-image: url(${web});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: center;
`;

export const NavbarPhoneButton = styled.button`
  background-color: #2a2850;
  box-shadow: 0 11px 41px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 200px;
  height: 50px;
  margin-right: 50px;
  padding: 10px;
  border: none;
  position: absolute;
  top: 40px;
  right: 30px;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    box-shadow: 0 11px 41px 0 rgba(0, 0, 0, 0.5);
  }
`;

export const NavbarPhoneIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

export const NavbarPhoneNumber = styled.p`
  font-size: 20px;
  color: #fff;
`;
