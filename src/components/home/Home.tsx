import React from "react";
import SearchInput from "../SearchInput";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px 10px;
  background: #fff;
`;

const Home = () => {
  return (
    <Wrapper>
      <SearchInput />
    </Wrapper>
  );
};

export default Home;
