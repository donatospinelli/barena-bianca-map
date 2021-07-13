import React from "react";
import { Link } from "gatsby";

import { useSiteMetadata } from "hooks";

import Container from "components/Container";

const Header = () => {
  const { companyName, companyUrl } = useSiteMetadata();

  return (
    <header>
      <Container type="content">
          <Link to="/">How is there? Here...</Link>
        <ul>
          <li>
            <Link to="/about/">About</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
