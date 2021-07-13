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
        <p>“How is it there? Here…” is a critical geography workshop for the kids of Venice and for anyone around the world coexisting with similar issues, such as environmental degradation of wetlands and growing pollution levels in both the air and the water, coastal erosion, subsidence and increasingly devastating floods. This is an invitation to care about each other, to think of our planet from the perspective of common threats and the potential to share solutions, rather than divide it into tiny clusters that compete with each other. <br></br><br></br> This interactive map, developed by Barena Bianca and digital artist Donato Spinelli, gathers all the contributions, thoughts and images sent to Venice from the world and the other way around, creating an ever-expanding and accessible network of friendship and solidarity.
<br></br>
The project is part of the venetian iteration of international project WE ARE OCEAN, commissioned and produced by ARTPORT_making waves with scientific support from We are here Venice and in collaboration with TBA21–Academy.</p>
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
