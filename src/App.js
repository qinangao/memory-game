import { useState } from "react";
import Form from "./components/Form";
import MemoryCard from "./components/MemoryCard";
import { getRandomEmojis } from "./helper";

const API_URL =
  "https://emojihub.yurace.pro/api/all/category/animals-and-nature";

export default function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState([]);

  async function startGame(e) {
    e.preventDefault();

    try {
      const res = await fetch(API_URL);
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();

      const dataSample = getRandomEmojis(data, 5);

      setEmojisData(dataSample);
      setIsGameOn(true);
    } catch (error) {
      console.error(error.message);
    }
  }

  function turnCard() {
    console.log("Memory card clicked");
  }

  return (
    <main>
      <h1>Memory</h1>
      {!isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && <MemoryCard handleClick={turnCard} data={emojisData} />}
    </main>
  );
}
