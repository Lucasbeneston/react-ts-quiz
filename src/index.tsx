import React from "react";
import ReactDOM from "react-dom";
import InformationsGameProvider from "./contexts/InformationsGameProvider";

import GlobalStyle from "./styles/index";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <InformationsGameProvider>
      <App />
    </InformationsGameProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
