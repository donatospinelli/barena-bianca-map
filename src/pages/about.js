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
        <h2>How is it there? Here...</h2>
        <h4> Part of WE ARE OCEAN global programme curated, commissioned and produced by ARTPORT_making waves </h4>
        <p>“How is it there? Here…” is a critical geography workshop for the kids of Venice and for anyone around the world coexisting with similar issues, such as environmental degradation of wetlands and growing pollution levels in both the air and the water, coastal erosion, subsidence and increasingly devastating floods. This is an invitation to care about each other, to think of our planet from the perspective of common threats and the potential to share solutions, rather than divide it into tiny clusters that compete with each other. <br></br><br></br> This interactive map, developed by Barena Bianca and digital artist Donato Spinelli, gathers all the contributions, thoughts and images sent to Venice from the world and the other way around, creating an ever-expanding and accessible network of friendship and solidarity.
<br></br>
The project is part of the venetian iteration of global project WE ARE OCEAN, commissioned and produced by ARTPORT_making waves with scientific support from We are here Venice and in collaboration with TBA21–Academy.</p>
        <br></br>
        <p>
          <a>Find out how to contribute to the map</a> <a class="link" href="https://www.barenabianca.earth/en/how-is-it-there-here-2/"><span class="wavy" data-content="HERE!">HERE!</span></a>
          </p>
        <h2>a project by</h2>
        <p>
            <a class="link" href="https://www.barenabianca.earth/"><span class="wavy" data-content="&nbsp;Barena Bianca&nbsp;">&nbsp;Barena Bianca&nbsp;</span></a>
<a>&nbsp;and&nbsp;</a>
          <a class="link" href="#"><span class="wavy" data-content="&nbsp;Donato Spinelli&nbsp;">&nbsp;Donato Spinelli&nbsp;</span></a>
        </p>
         
        <h2>supported by</h2>
        <p>

         <a class="link" href="https://artport-project.org/"><span class="wavy" data-content="&nbsp;ARTPORT_making waves&nbsp;">&nbsp;ARTPORT_making waves&nbsp;</span></a><br></br>

          <a class="link" href="https://www.weareherevenice.org/"><span class="wavy" data-content="&nbsp;We are here Venice&nbsp;">&nbsp;We are here Venice&nbsp;</span></a><br></br>

          <a class="link" href="https://www.ocean-space.org/"><span class="wavy" data-content="&nbsp;Ocean Space&nbsp;">&nbsp;Ocean Space&nbsp;</span></a><br></br>

          <a class="link" href="https://www.tba21.org/#item--academy--1819"><span class="wavy" data-content="&nbsp;TBA 21-Academy&nbsp;">&nbsp;TBA 21-Academy&nbsp;</span></a><br></br>

        </p>
      </Container>
    </Layout>
  );
};

export default SecondPage;
