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

        <h2>{companyName}</h2>
        <p>Qui una descrizione del progetto</p>
 

        <h2>Created By</h2>
        <p>
          <a> Barena Bianca and Donato Spinelli</a>
        </p>
      </Container>
    </Layout>
  );
};

export default SecondPage;
