import React from "react";
import styled from "styled-components";
import Heart from "../atoms/SVGR/Heart";
import color from "../../styles/variables";

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
