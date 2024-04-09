import { createContext } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  return <GameContext.Provider value={{}}>{children}</GameContext.Provider>;
}

export default GameContext;
