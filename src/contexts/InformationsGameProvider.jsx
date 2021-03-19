import React, { useEffect } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "../customHooks/useLocalStorage";
import InformationsGameContext from "./InformationsGameContext";

export default function InformationsGameProvider({ children }) {
  const [gameInformations, setGameInformations] = useLocalStorage("score", 0);

  useEffect(() => {
    setGameInformations(gameInformations);
  }, [gameInformations, setGameInformations]);

  const contextInformationsGame = {
    gameInformations,
    setGameInformations,
  };

  return (
    <InformationsGameContext.Provider value={contextInformationsGame}>
      {children}
    </InformationsGameContext.Provider>
  );
}

InformationsGameProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
