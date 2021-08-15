import styled from 'styled-components'
import web from '../../assets/images/web-.jpg'
import {keyframes} from "styled-components";

const ButtonAnimation = keyframes `
  0% {
    transform: scale(1);
    box-shadow: 0 31px 41px 0 rgba(0, 0, 0, 0.3);

  } 50% {
    transform: scale(1.1);
        box-shadow: 0 31px 41px 0 rgba(0, 0, 0, 0.8);
      }
  100% {
    transform: scale(1);
  }
`;

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
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const CtaContainer = styled.div`
  margin-left: 100px;
  margin-top: 10vw;
  width: 80%;
  line-height: 1;
  @media screen and (max-width: 1000px) {
    margin-top: 15vw;
  }
  @media screen and (max-width: 800px) {
    margin: 15vw 50px 50px 50px;
  }
`;

export const CtaHeader = styled.h1`
  font-size: 5vw;
  color: #fff;
  margin-bottom: 10px;
  line-height: 1;
  letter-spacing: 8px;
  @media screen and (max-width: 800px) {
    font-size: 10vw;
  }
`;

export const CtaDesc = styled.p`
  font-size: 2.5vw;
  color: #fff;
  @media screen and (max-width: 800px) {
    font-size: 5vw;
  }
`;

export const CtaButtonContainer = styled.div`
  width: 250px;
  height: 50px;
  display: flex;
  z-index: 5;
  position: relative;
  margin-top: 5vw;
  @media screen and (max-width: 1000px) {
    margin-top: 8vw;
  }
  @media screen and (max-width: 800px) {
    margin-top: 15vw;
  }
`;

export const TopLittleCircle = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #97d0ee;
  top: -50%;
  right: -10%;
  z-index: 1;
`;

export const BottomLittleCircle = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fec56e;
  bottom: -50%;
  left: -10%;
  z-index: 1;
`;

export const CtaButton = styled.button`
  width: 100%;
  height: 100%;
  font-size: 25px;
  display: flex;
  align-items: center;
  background-color: #618bef;
  box-shadow: 0 31px 41px 0 rgba(0, 0, 0, 0.3);
  outline: none;
  border: none;
  color: #fff;
  padding: 20px;
  z-index: 99999;
  border-radius: 12px;
  animation: ${ButtonAnimation} 2s linear infinite;
  cursor: pointer;
  margin-left: 0;
  &:hover {
    .icon {
      margin-left: 20px;
      transition: margin-left .3s ease-in-out;
    } 
  }
`;

export const Link = styled.a `
  color: #fff;
  text-decoration: none;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  transition: margin-left .3s ease-in-out;
`;

export const BigCircle = styled.div`
  position: absolute;
  background-color: #4b65b2;
  width: 150px;
  height: 150px;
  top: 20%;
  right: -100px;
  border-radius: 50%;
`;

export const MediumCircle = styled.div`
  position: absolute;
  background-color: #638df3;
  width: 100px;
  height: 100px;
  bottom: 0;
  right: -50px;
  border-radius: 50%;
`;

export const Rectangle = styled.div`
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
  @media screen and (max-width: 800px) {
    display: none;
  }
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

export const NavbarPhoneNumber = styled.p`
  font-size: 20px;
  color: #fff;
`;
