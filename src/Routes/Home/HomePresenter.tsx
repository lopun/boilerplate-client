import React from "react";
import styled from "src/typed-components";
import Helmet from "react-helmet";

const Container = styled.div``;

const HomePresenter = () => (
  <Container>
    <Helmet>
      <title>Home | Boilerplate</title>
    </Helmet>
    Home :)
  </Container>
);

export default HomePresenter;
