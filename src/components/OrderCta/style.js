import styled from 'styled-components'


export const Wrapper = styled.div `
  width: 100%;
  height: 100vh;
  background-color: #4b5a81;
`;

export const Container = styled.div `
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const LeftContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 100px;
`;

export const LeftContainerHeading = styled.h2 `
  font-size: 75px;
  color: #fff;
  width: 100%;
  margin-bottom: 50px;
`;

export const CtaButtonContainer = styled.div`
  width: 225px;
  height: 50px;
  display: flex;
  z-index: 5;
  position: relative;
  margin-top: 50px;
`;

export const TopLittleCircle = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #97d0ee;
  top: -50%;
  right: -10%;
  z-index: 1;
`;

export const LeftCtaButton = styled.button`
  width: 100%;
  height: 100%;
  font-size: 25px;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 31px 41px 0 rgba(0, 0, 0, 0.3);
  outline: none;
  border: none;
  color: #2a2850;
  padding: 20px;
  //display: flex;
  z-index: 99999;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: transform .3s ease-in-out;
  }
`
// export const LeftContainerButton = styled.button`
//   position: relative;
//   width: 225px;
//   height: 50px;
//   font-size: 25px;
//   display: flex;
//   align-items: center;
//   background-color: #fff;
//   box-shadow: 0 31px 41px 0 rgba(0, 0, 0, 0.3);
//   outline: none;
//   border: none;
//   color: #2a2850;
//   padding: 20px;
//   margin-top: 50px;
//   //display: flex;
//   z-index: 99999;
//   border-radius: 12px;
//   cursor: pointer;
//   &:before {
//     content: '';
//     position: absolute;
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     background-color: #93cbe8;
//     top: -50%;
//     right: -5%;
//     //z-index: 1;
//   }
// `;

export const RightContainer = styled.div `
  margin-top: 50px;
  width: 100%;
  height: auto;
`;

export const RightContainerImage = styled.img `
  width: 100%;
  height: 100%;
`;
