import React from "react";
import { Helmet } from "react-helmet";

import { useSiteMetadata } from "hooks";

import Layout from "components/Layout";
import Container from "components/Container";

const SecondPage = () => {
  const {
    companyName,
    companyUrl,
    authorName,
    authorUrl,
    siteDescription,
  } = useSiteMetadata();

  return (
    <Layout pageName="about">
      <Helmet>
        <title>About</title>
      </Helmet>
      <Container type="content">
        <h1>About</h1>

        <h2>How is there? Here...</h2>
        <p>Qui una descrizione del progetto</p><br></br>
        <p>Here a description of the project</p><br></br>
 

        <h2>a project by</h2>
        <p>
          <a> Barena Bianca and Donato Spinelli</a>
        </p>

        <h2>supported by</h2>
        <p>
          <a>Ocean Space</a> <br></br>
          <a>We are Venice</a><br></br>
          <a>TBA 21</a><br></br>
        </p>
      </Container>
    </Layout>
  );
};

export default SecondPage;
