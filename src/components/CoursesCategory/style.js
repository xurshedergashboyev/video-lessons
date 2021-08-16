import styled from 'styled-components'

export const CoursesList = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 150px;
  @media screen and (max-width: 800px) {
    margin: 0 50px;
    align-items: center;
  }
`;

export const CoursesListHeading = styled.h2`
  font-size: 50px;
  margin-bottom: 50px;
  color: #2a2850;
  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;

export const Course = styled.div`
  width: 400px;
  height: 75px;
  background-color: #733dfd;
  color: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 50px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: .45s cubic-bezier(.44, .99, .48, 1);
  z-index: 5;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 75px;
    font-size: 25px;
  }
`;

export const MoreCourses = styled.img`
  width: 50px;
  height: 50px;
  transform: ${props => props.rotate ? 'rotate(-90deg)' : 'rotate(90deg)'};
  transition: transform .45s cubic-bezier(.44, .99, .48, 1);
  @media screen and (max-width: 500px) {
    width: 40px;
    height: 40px;
  }
`;

export const FlexCourses = styled.div`
  display: flex;
  width: 80%;
  height: ${props => props.opacity ? (props.width > 2 ? '350px' : '350px') : "0"};
  transition: .3s ease-in-out;
  overflow: hidden;
  @media screen and (max-width: 1200px) {
    height: ${props => props.opacity ? (props.width > 4 ? '650px' : '350px' && props.width > 2 ? '300px' : '350px') : "0px"};
    flex-wrap: ${props => props.width > 4 ? 'wrap' : 'no-wrap'};
  }
  @media screen and (max-width: 1100px) {
    height: ${props => props.opacity ? (props.width > 4 ? '1000px' : '350px' && props.width > 2 ? '300px' : '350px') : "0px"};
    flex-wrap: ${props => props.width > 4 ? 'wrap' : 'no-wrap'};
  }
  @media screen and (max-width: 900px) {
    height: ${props => props.opacity ? (props.width > 4 ? '650px' : '350px' && props.width > 2 ? '250px' : '350px') : "0px"};
  }
  @media screen and (max-width: 800px) {
    height: ${props => props.opacity ? (props.width > 4 ? '1000px' : '350px' && props.width > 2 ? '700px' : '350px') : "0px"};
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (max-width: 700px) {
    height: ${props => props.opacity ? (props.width > 4 ? '850px' : '350px' && props.width > 2 ? '750px' : '350px') : "0px"};
  }
  @media screen and (max-width: 600px) {
    height: ${props => props.opacity ? (props.width > 4 ? '750px' : '350px' && props.width > 2 ? '650px' : '300px') : "0px"};
  }
  @media screen and (max-width: 450px) {
    height: ${props => props.opacity ? (props.width > 4 ? '650px' : '350px' && props.width > 2 ? '400px' : '200px') : "0px"};
  }
  @media screen and (max-width: 400px) {
    height: ${props => props.opacity ? (props.width > 4 ? '550px' : '350px' && props.width > 2 ? '350px' : '150px') : "0px"};
  }
`;

export const FlexCourse = styled.div`
  width: 200px;
  height: auto;
  margin-right: 50px;
  margin-bottom: 50px;
  @media screen and (max-width: 900px) {
    margin-bottom: 50px;
  }
  @media screen and (max-width: 800px) {
    width: 30%;
    margin-right: 50px;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 550px) {
    width: 35%;
  }
  @media screen and (max-width: 440px) {
    width: 30%;
  }
`;

export const FlexCourseImage = styled.img`
  width: 100%;
  height: auto;
`;

export const Ellipse = styled.img`
  width: 150px;
  height: auto;
  position: absolute;
  top: 30%;
  right: 30%;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;