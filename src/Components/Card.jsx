import styled from "@emotion/styled";
import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Container = styled("div")`
  border: 0.5px solid white;
  border-radius: 0.5rem;
  width: 16rem;
  margin: 0.5rem;
  // height: 20rem;
  background-color: grey;
`;

const ImageWrapper = styled("div")`
  position: relative;
`;

const Image = styled("img")`
  width: 16rem;
  height: 10rem;
  border-radius: 0.5rem 0.5rem 0rem 0rem;
`;

const Button = styled("div")`
  display: flex;
  flex-direction: row-reverse;
  position: absolute;
  right: 0.5rem;
  bottom: -0.7rem;
`;

const Like = styled("button")`
  border-radius: 50%;
  cursor: pointer;
`;

const Text = styled("p")`
  margin-top: 0.5rem;
  word-break: break-all;
  white-space: wrap;
  text-overflow: ellipsis;
  color: white;
`;

const TextTitle = styled("p")`
  font-weight: bold;
  color: white;
`;

const TextWrapper = styled("div")`
  height: 12rem;
  padding: 1rem;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export default function Card(props) {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  const clickHandler = () => {
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("DisLiked Successfully !");
    } else {
      setLikedCourses((prev) => [...prev, course.id]);
      toast.success("Liked Successfully !");
    }
  };

  return (
    <Container>
      <ImageWrapper>
        <Image src={course.image.url} alt="img" />
        <Button>
          <Like onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike size="27" />
            ) : (
              <FcLikePlaceholder size="27" />
            )}
          </Like>
        </Button>
      </ImageWrapper>
      <TextWrapper>
        <TextTitle>{course.title}</TextTitle>
        <Text>
          {course.description.length > 130
            ? course.description.substr(0, 130)
            : course.description}
          ...
        </Text>
      </TextWrapper>
    </Container>
  );
}
