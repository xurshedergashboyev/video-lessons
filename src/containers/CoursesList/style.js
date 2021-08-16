import styled from 'styled-components';

export const Wrapper = styled.div `
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: 0;
  margin-right: 0;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;


export const FirstCircle = styled.div `
  width: 200px;
  height: 100px;
  border-top-left-radius: 200px;
  border-top-right-radius: 200px;
  position: absolute;
  top: 0;
  left: -50px;
  transform: rotate(90deg);
  background-color: #96cfed;
  @media screen and (max-width: 800px) {
    left: -100px;
  }
`;

export const SecondCircle = styled.div `
  width: 200px;
  height: 100px;
  border-top-left-radius: 200px;
  border-top-right-radius: 200px;
  position: absolute;
  top: 50%;
  left: -50px;
  transform: rotate(90deg);
  background-color: #f86872;
  @media screen and (max-width: 800px) {
    left: -100px;
  }
`;

export const ThirdCircle = styled.div `
  width: 200px;
  height: 100px;
  border-top-left-radius: 200px;
  border-top-right-radius: 200px;
  position: absolute;
  top: 90%;
  left: -50px;
  transform: rotate(90deg);
  background-color: #f1a2cf;
  @media screen and (max-width: 800px) {
    left: -100px;
  }
`;