import { useEffect, useRef } from "react";
import { data } from "../data";
import { useGame } from "../useGame";
import RegularButton from "./RegularButton";
import SelectField from "./SelectField";

export default function Form() {
  const { startGame, handleFormChange, isFirstRender } = useGame();

  const divRef = useRef(null);
  useEffect(() => {
    !isFirstRender && divRef.current.focus();
  }, [isFirstRender]);
  return (
    <div className="form-container" ref={divRef}>
      <form className="wrapper">
        <SelectField
          label="Select an emoji category:"
          name="category"
          id="category"
          options={data.category}
          onChange={handleFormChange}
        />
        <SelectField
          label="Choose your challenge level:"
          name="number"
          id="difficulty"
          options={data.difficulty}
          onChange={handleFormChange}
        />
        <RegularButton handleClick={startGame}>Start Game</RegularButton>
      </form>
    </div>
  );
}
