import React from "react";
import styled from "styled-components";
import Heart from "../atoms/SVGR/Heart";

const Footer = () => {
  return (
    <FooterSection>
      <Copyright>
        Made with <Heart /> by Lucas BENESTON
      </Copyright>
    </FooterSection>
  );
};

export default Footer;

// Styles
const FooterSection = styled.footer`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Copyright = styled.p`
  font-size: 1.2rem;
  & svg {
    height: 1rem;
  }
`;
