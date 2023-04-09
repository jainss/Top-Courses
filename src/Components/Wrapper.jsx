import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Cards from "./Cards";
import { apiUrl, filterData } from "../data";
import { toast } from "react-toastify";
import Spinner from "./Spinner";

const Container = styled("div")`
  background-color: #3e5069;
  color: whith;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Wrapper() {
  const [courses, setCourses] = useState({});
  const [loader, setLoader] = useState(true);
  const [coursesCategory, setcousesCategory] = useState(filterData[0].title);

  const fetchData = async () => {
    setLoader(true);
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setCourses(data.data);
    } catch (error) {
      toast.error("Something went Wrong!");
    }
    setLoader(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Filter
        filterData={filterData}
        coursesCategory={coursesCategory}
        setcousesCategory={setcousesCategory}
      />
      {loader ? (
        <Spinner />
      ) : (
        <Cards courses={courses} coursesCategory={coursesCategory} />
      )}
    </Container>
  );
}
