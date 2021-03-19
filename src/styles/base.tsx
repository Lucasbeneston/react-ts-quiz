import color from "./variables";
import device from "./breakpoints";

const base = `
  * {
    scrollbar-width: none;

    &::-webkit-scrollbar {
      width: 0px;
    }
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    
    @media ${device.laptop} {
      font-size: 72.5%;
    }
  }

  body {
    font-size: 1.4rem;
    font-family: Helvetica, sans-serif;
    color: ${color.anthraciteGray};
    background: linear-gradient(${color.scienceBlue}, ${color.purpleHeart});
  }`;

export default base;
