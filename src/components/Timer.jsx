import { useTimer } from "../useTimer";

function Timer() {
  const { timeLeft } = useTimer();
  return (
    <div>
      <h2>Time Left: {timeLeft}s</h2>
    </div>
  );
}

export default Timer;
