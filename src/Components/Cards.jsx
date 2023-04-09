import React, { useState } from "react";
import Card from "./Card";
import styled from "@emotion/styled";

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  width: 60rem;
  align-items: center;
  justify-content: center;
`;

export default function Cards(props) {
  let courses = props.courses;
  let coursesCategory = props.coursesCategory;

  const [likedCourses, setLikedCourses] = useState([]);
  let allCourses = [];

  const getCourses = () => {
    if (coursesCategory === "All") {
      Object.values(courses).forEach((coursesCategory) => {
        coursesCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
    } else {
      return courses[coursesCategory];
    }

    return allCourses;
  };

  return (
    <Container>
      {getCourses().map((course) => {
        return (
          <Card
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </Container>
  );
}
