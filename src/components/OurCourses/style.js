import styled from 'styled-components'


export const Container = styled.div `
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 50px;
`;

export const RightLongImage = styled.img `
  width: auto;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;

export const Heading = styled.h2 `
  margin-left: 150px;
  margin-bottom: 50px;
  font-size: 100px;
  color: #2a2850;
  position: relative;
  margin-top: 0;
`;

export const FlexCourses = styled.div `
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin-left: 150px;
  z-index: 5;
`;

export const FlexCourse = styled.div `
  width: 200px;
  height: auto;
  margin-right: 150px;
  margin-bottom: 100px;
  z-index: 5;
  position: relative;
`;

export const FlexCourseImage = styled.img `
  width: 100%;
  height: 100%;
`;

export const FlexCircle = styled.div `
  width: 75px;
  height: 75px;
  position: absolute;
  background-color: #92cae6;
  top: 0;
  right: -15%;
  z-index: -1;
  border-radius: 50%;
`;