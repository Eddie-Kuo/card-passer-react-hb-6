import { createContext, useContext, useState } from 'react';
import initialCards from '../cards-data';


const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [deck, setDeck] = useState(initialCards);
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

  return <GameContext.Provider value={{ deck, setDeck, from, setFrom, to, setTo }}>{children}</GameContext.Provider>;
};

const useGameContext = () => {
  const context = useContext(GameContext);

  return context;
};

export { GameProvider, useGameContext };