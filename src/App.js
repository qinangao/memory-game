import Form from "./components/Form";
import MemoryCard from "./components/MemoryCard";
import AssistiveTechInfo from "./components/AssistiveTechInfo";
import GameOver from "./components/GameOver";
import Error from "./components/Error";
import Title from "./components/Title";
import { useGame } from "./useGame";
import TimeUp from "./components/TimeUp";

export default function App() {
  const { isGameOn, areAllCardMatched, isError, isTimeUp } = useGame();

  return (
    <main>
      <Title />
      {!isGameOn && !isError && <Form />}
      {isTimeUp && <TimeUp />}
      {isGameOn && !areAllCardMatched && <AssistiveTechInfo />}
      {areAllCardMatched && <GameOver />}
      {isGameOn && !areAllCardMatched && <MemoryCard />}
      {isError && <Error />}
    </main>
  );
}
