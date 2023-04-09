import React from "react";
import styled from "@emotion/styled";

const Navbox = styled("div")`
  background-color: #251f47;
  display: flex;
  height: 3rem;
  align-items: center;
  justify-content: center;
  color: white;
`;

export default function Navbar() {
  return (
    <Navbox>
      <h2 style={{ color: "white" }}>Top Courses</h2>
    </Navbox>
  );
}
