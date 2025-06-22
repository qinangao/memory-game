import { useEffect, useRef } from "react";
import RegularButton from "./RegularButton";
import { useGame } from "../useGame";

function GameOver() {
  const { resetGame } = useGame();
  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.focus();
  }, []);
  return (
    <div
      className="wrapper wrapper--accent result--wrapper"
      ref={divRef}
      tabIndex={-1}
    >
      <p className="p--large">You've matched all the memory cards! 🎉🥳</p>
      <RegularButton handleClick={resetGame}>Play Again</RegularButton>
    </div>
  );
}

export default GameOver;
