import { useEffect, useState } from "react";
import Form from "./components/Form";
import MemoryCard from "./components/MemoryCard";
import { getRandomEmojis, getShuffledEmojis } from "./helper";

const API_URL =
  "https://emojihub.yurace.pro/api/all/category/animals-and-nature";

export default function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);
  const [matchCards, setMatchCards] = useState([]);
  // console.log(selectedCard);

  async function startGame(e) {
    e.preventDefault();

    try {
      const res = await fetch(API_URL);
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();
      //1. get 5 random emojis from emoji arrray
      const dataSample = getRandomEmojis(data, 5);

      //2.pair emojis and shuffle emojis
      const getEmojis = getShuffledEmojis(dataSample);

      setEmojisData(getEmojis);
      setIsGameOn(true);
    } catch (error) {
      console.error(error.message);
    }
  }
  // console.log(selectedCard);
  function turnCard(name, index) {
    // setSelectedCard([{ index, name }]);
    const selectedCardEntry = selectedCard.find((card) => card.index === index);
    if (!selectedCardEntry && selectedCard.length < 2) {
      setSelectedCard((prev) => [...prev, { index, name }]);
    } else if (!selectedCardEntry && selectedCard.length === 2) {
      setSelectedCard([{ index, name }]);
    }
  }
  console.log(matchCards);

  useEffect(() => {
    if (selectedCard.length === 2) {
      const [first, second] = selectedCard;
      if (first.name === second.name && first.index !== second.index) {
        console.log("Match!");
        setMatchCards((prev) => [...prev, ...selectedCard]);
      } else {
        console.log("Does not match");
      }
    }
  }, [selectedCard]);

  return (
    <main>
      <h1>Memory</h1>
      {!isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && <MemoryCard handleClick={turnCard} data={emojisData} />}
    </main>
  );
}
