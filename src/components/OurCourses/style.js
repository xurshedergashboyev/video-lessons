import styled from 'styled-components'


export const Container = styled.div `
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 50px;
  //margin-left: 150px;
  padding-left: 150px;
  @media screen and (max-width: 800px) {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const RightLongImage = styled.img `
  width: auto;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Heading = styled.h2 `
  margin-bottom: 100px;
  font-size: 9vw;
  color: #2a2850;
  position: relative;
  margin-top: 0;
  @media screen and (max-width: 800px) {
    font-size: 13vw;
    text-align: center;
    margin-top: 50px;
  }
`;

export const FlexCourses = styled.div `
  display: flex;
  width: 80%;
  z-index: 5;
  @media screen and (max-width: 550px) {
   flex-wrap: wrap;  
    justify-content: center;
  }
`;

export const FlexCourse = styled.div `
  width: 200px;
  height: auto;
  margin-right: 150px;
  margin-bottom: 100px;
  z-index: 5;
  position: relative;
  @media screen and (max-width: 900px) {
    margin-bottom: 50px;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    margin-right: 50px;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 550px) {
    width: 35%;
  }
  @media screen and (max-width: 420px) {
    width: 30%;
  }
`;

export const FlexCourseImage = styled.img `
  width: 100%;
  height: 100%;
`;

export const FlexCircle = styled.div `
  width: 6vw;
  height: 6vw;
  position: absolute;
  background-color: #92cae6;
  top: 0;
  right: -15%;
  z-index: -1;
  border-radius: 50%;
  @media screen and (max-width: 900px) {
    width: 7vw;
    height: 7vw;
  }
`;