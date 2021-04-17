import React from "react";
import SearchCoin from "../SearchCoin";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px 10px;
  background: #fff;
`;

const Home = () => {
  return (
    <Wrapper>
      <SearchCoin />
    </Wrapper>
  );
};

export default Home;
