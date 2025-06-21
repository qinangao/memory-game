import { data } from "../data";
import RegularButton from "./RegularButton";
import SelectField from "./SelectField";

export default function Form({ handleSubmit, handleChange }) {
  return (
    <div className="form-container">
      <form className="wrapper">
        <SelectField
          label="Select an emoji category:"
          name="category"
          id="category"
          options={data.category}
          onChange={handleChange}
        />
        <SelectField
          label="Choose your challenge level:"
          name="number"
          id="difficulty"
          options={data.difficulty}
          onChange={handleChange}
        />
        <RegularButton handleClick={handleSubmit}>Start Game</RegularButton>
      </form>
    </div>
  );
}
