import React from "react";
import styled from "styled-components";
import Heart from "../atoms/SVGR/Heart";
import color from "../../styles/variables";

const Footer = () => {
  return (
    <FooterSection>
      <Copyright>
        Made with <Heart /> by{" "}
        <Link href="https://www.linkedin.com/in/beneston-lucas/">
          Lucas BENESTON
        </Link>
      </Copyright>
    </FooterSection>
  );
};

export default Footer;

// Styles
const FooterSection = styled.footer`
  align-items: center;
  color: ${color.offWhite};
  display: flex;
  height: 50px;
  justify-content: center;
  width: 100%;
`;
const Copyright = styled.p`
  font-size: 1.2rem;
  & svg {
    height: 1rem;
  }
`;

const Link = styled.a`
  border-bottom: 1px solid ${color.extraLightGrey};
  color: ${color.offWhite};
  padding-bottom: 3px;
  text-decoration: none;
`;
