import { useEffect, useState } from "react";
import Form from "./components/Form";
import MemoryCard from "./components/MemoryCard";
import { getRandomEmojis, getShuffledEmojis } from "./helper";
import AssistiveTechInfo from "./components/AssistiveTechInfo";
import GameOver from "./components/GameOver";
import Error from "./components/Error";
import { API_URL } from "./config";

export default function App() {
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
      const dataSample = getRandomEmojis(data, formData.number);

      //2.pair emojis and shuffle emojis
      const getEmojis = getShuffledEmojis(dataSample);
      setEmojisData(getEmojis);
      setIsGameOn(true);
    } catch (error) {
      console.error(error.message);
      setIsError(true);
    }
  }
  // console.log(selectedCard);
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
    <main>
      <h1>Memory</h1>
      {!isGameOn && !isError && <Form handleSubmit={startGame} />}
      {isGameOn && !areAllCardMatched && (
        <AssistiveTechInfo emojiData={emojisData} matchedCards={matchCards} />
      )}
      {areAllCardMatched && <GameOver resetGame={resetGame} />}
      {isGameOn && (
        <MemoryCard
          handleClick={turnCard}
          data={emojisData}
          selectedCard={selectedCard}
          matchCards={matchCards}
        />
      )}
      {isError && <Error resetError={resetError} />}
    </main>
  );
}
