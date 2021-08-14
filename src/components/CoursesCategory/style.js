import styled from 'styled-components'

export const CoursesList = styled.div `
  display: flex;
  flex-direction: column;
`;

export const CoursesListHeading = styled.h2 `
  font-size: 50px;
  margin-left: 150px;
  margin-bottom: 50px;
  color: #2a2850;
`;

export const Course = styled.div `
  width: 400px;
  height: 75px;
  background-color: #733dfd;
  color: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 50px;
  margin-left: 150px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: .45s cubic-bezier(.44, .99, .48, 1);
`;

export const MoreCourses = styled.img `
  width: 50px;
  height: 50px;
  transform: ${props => props.rotate ? 'rotate(-90deg)' : 'rotate(90deg)'};
  transition: transform .45s cubic-bezier(.44, .99, .48, 1);
`;


export const FlexCourses = styled.div `
  display: flex;
  width: 80%;
  margin-left: 150px;
`;

export const FlexCourse = styled.div `
  width: 200px;
  height: auto;
  margin-right: 150px;
  margin-bottom: 100px;
`;

export const FlexCourseImage = styled.img `
  width: 100%;
  height: 100%;
`;
