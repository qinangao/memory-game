import { createContext, useContext, useEffect, useState } from "react";
import { API_URL } from "./config";
import { getRandomEmojis, getShuffledEmojis } from "./helper";

const GameContext = createContext();

function GameProvider({ children }) {
  const initialFormData = {
    category: "animals-and-nature",
    number: 5,
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);
  const [matchCards, setMatchCards] = useState([]);
  const [areAllCardMatched, setAreAllCardMatched] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function startGame(e) {
    e.preventDefault();
    try {
      // throw new Error("error test");
      const res = await fetch(`${API_URL}/${formData.category}`);
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();
      //1. get 5 random emojis from emoji arrray
      const dataSample = getRandomEmojis(data, Number(formData.number));

      //2.pair emojis and shuffle emojis
      const getEmojis = getShuffledEmojis(dataSample);
      setEmojisData(getEmojis);
      setIsGameOn(true);
    } catch (error) {
      console.error(error.message);
      setIsError(true);
    }
  }

  function turnCard(name, index) {
    if (selectedCard.length < 2) {
      setSelectedCard((prev) => [...prev, { index, name }]);
    } else if (selectedCard.length === 2) {
      setSelectedCard([{ index, name }]);
    }
  }

  useEffect(() => {
    if (selectedCard.length === 2) {
      const [first, second] = selectedCard;
      if (first.name === second.name && first.index !== second.index) {
        setMatchCards((prev) => [...prev, ...selectedCard]);
      }
    }
  }, [selectedCard]);

  useEffect(() => {
    if (matchCards.length && matchCards.length === emojisData.length) {
      setAreAllCardMatched(true);
    }
  }, [matchCards, emojisData]);

  function resetGame() {
    setIsGameOn(false);
    setSelectedCard([]);
    setMatchCards([]);
    setAreAllCardMatched(false);
  }
  function resetError() {
    setIsError(false);
  }
  return (
    <GameContext.Provider
      value={{
        formData,
        handleFormChange,
        startGame,
        isGameOn,
        emojisData,
        selectedCard,
        turnCard,
        matchCards,
        areAllCardMatched,
        resetGame,
        isError,
        resetError,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

function useGame() {
  const context = useContext(GameContext);
  if (context === undefined)
    throw new Error("GameContext was used outside the StataProvider ");
  return context;
}

export { GameProvider, useGame };
