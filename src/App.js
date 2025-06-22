import Form from "./components/Form";
import MemoryCard from "./components/MemoryCard";
import AssistiveTechInfo from "./components/AssistiveTechInfo";
import GameOver from "./components/GameOver";
import Error from "./components/Error";
import Title from "./components/Title";
import { useGame } from "./useGame";
import { useTimer } from "./useTimer";

export default function App() {
  const { isGameOn, areAllCardMatched, isError } = useGame();

  return (
    <main>
      <Title />
      {!isGameOn && !isError && <Form />}
      {isGameOn && !areAllCardMatched && <AssistiveTechInfo />}
      {areAllCardMatched && <GameOver />}
      {isGameOn && <MemoryCard />}
      {isError && <Error />}
    </main>
  );
}
