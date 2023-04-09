import React from "react";
import styled from "@emotion/styled";
import "./Spinner.css";

const Container = styled("div")`
  height: 5rem;
  margin: 1rem;
`;

const Button = styled("button")`
  padding: 0.6rem;
  margin: 0.4rem;
  background-color: #323441;
  color: white;
  border-radius: 0.3rem;
  cursor: pointer;
  font-weight: bold;
`;

export default function Filter(props) {
  let filterData = props.filterData;
  let coursesCategory = props.coursesCategory;
  let setcousesCategory = props.setcousesCategory;

  const filterHandler = (title) => {
    setcousesCategory(title);
  };

  return (
    <Container>
      {filterData.map((data) => {
        return (
          <Button
            onClick={() => filterHandler(data.title)}
            className={`${
              coursesCategory === data.title
                ? "filterBorder"
                : "NonfilterBorder"
            }`}
          >
            {data.title}
          </Button>
        );
      })}
    </Container>
  );
}
