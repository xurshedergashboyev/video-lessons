import styled from 'styled-components';

export const Wrapper = styled.div `
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

export const Container = styled.div `
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ImageContainer = styled.div `
  height: 120vh; 
  width: auto;
  z-index: 10;
`;

export const Image = styled.img `
  height: 100%;
  width: 100%;
`;

export const RightContainer = styled.div `
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
`;

export const Header = styled.div `
  font-size: 100px;
  color: #2a2850;
  margin-bottom: 100px;
  position: relative;
  z-index: 5;
  &:before {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #fb9591;
    top: 30%;
    right: 0;
    z-index: 1;
  }
`;

export const Facilities = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FacilitiesItem = styled.div `
  width: 45%;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  margin-right: 50px;
`;

export const FacilitiesItemImage = styled.div `
  width: 150px;
  height: 100px;
  border-radius: 50% 0 0 50%;
  margin-right: 10px;
  background-color: ${props => props.bgColor ? props.bgColor : '#2a2850'};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FacilitiesItemImg = styled.img `
  width: 70%;
  height: 70%;
`;

export const FacilitiesInfo = styled.div `
  display: flex;
  flex-direction: column;
`;

export const FacilitiesItemName = styled.h2 `
  font-size: 20px;
  color: #2a2850;
  margin-bottom: 0;
`;

export const FacilitiesItemDesc = styled.p `
  font-size: 15px;
  color: #a5a5a6;
`;
