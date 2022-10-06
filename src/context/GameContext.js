import { createContext, useContext, useState } from 'react';
import initialCards from '../cards-data';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [deck, setDeck] = useState(initialCards);
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);
  const [selectedCard, setSelectedCard] = useState();
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);

  return (
    <GameContext.Provider
      value={{
        deck,
        setDeck,
        from,
        setFrom,
        to,
        setTo,
        selectedCard,
        setSelectedCard,
        playerOneHand,
        setPlayerOneHand,
        playerTwoHand,
        setPlayerTwoHand,
        playerThreeHand,
        setPlayerThreeHand,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);

  return context;
};

export { GameProvider, useGameContext };
