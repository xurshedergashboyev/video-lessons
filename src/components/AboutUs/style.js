import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`;

export const ImageContainer = styled.div`
  width: auto;
  z-index: 10;
  position: absolute;
  left: 5%;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin-right: 50px;
  @media screen and (max-width: 800px) {
    margin-right: 0;
  }
`;

export const Circle = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #fb9591;
  top: 30%;
  right: -1%;
  z-index: -1;
`;

export const Heading = styled.div`
  margin-bottom: 100px;
  position: relative;
  margin-top: 50px;
  z-index: 5;
  @media screen and (max-width: 800px) {
    margin-bottom: 0;
  }
`;

export const Header = styled.div`
  font-size: 100px;
  color: #2a2850;
  @media screen and (max-width: 800px) {
    font-size: 12vw;
    text-align: center;
    margin-bottom: 50px;
  }
`;

export const Facilities = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
  @media screen and (max-width: 800px) {
    margin: 0 50px 50px 50px;
  }
`;

export const FacilitiesItem = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  margin-right: 50px;
  @media screen and (max-width: 1430px) {
    width: 400px;
  }
  @media screen and (max-width: 1300px) {
    width: 500px;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 50px;
    margin-right: 0;
  }
`;

export const FacilitiesItemImage = styled.div`
  width: 200px;
  height: 100px;
  border-radius: 50% 0 0 50%;
  margin-right: 20px;
  background-color: ${props => props.bgColor ? props.bgColor : '#2a2850'};
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    width: 225px;
    height: 125px;
  }
  @media screen and (max-width: 450px) {
    width: 175px;
    height: 100px;
  }
`;

export const FacilitiesItemImg = styled.img`
  width: 70%;
  height: 70%;
  margin-left: 10px;
`;

export const FacilitiesInfo = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const FacilitiesItemName = styled.h2`
  font-size: 25px;
  color: #2a2850;
  margin-bottom: 0;
  @media screen and (max-width: 450px) {
    font-size: 20px;
  }
`;

export const FacilitiesItemDesc = styled.p`
  font-size: 20px;
  color: #a5a5a6;
  margin-top: 0;
  line-height: 1;
  @media screen and (max-width: 450px) {
    font-size: 15px;
  }
`;
