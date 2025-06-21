import { useGame } from "../useGame";

function AssistiveTechInfo() {
  const { emojisData, matchCards } = useGame();

  return (
    <section className="sr-only" aria-atomic="true" aria-live="polite">
      <h2>Game status</h2>
      <p>Number of matched pairs: {matchCards.length / 2}.</p>
      <p>
        Number of cards left to match: {emojisData.length - matchCards.length}.
      </p>
    </section>
  );
}

export default AssistiveTechInfo;
