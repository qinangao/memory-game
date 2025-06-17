import { decodeEntity } from "html-entities";
import { getRandomEmojis } from "../helper";

export default function MemoryCard({ handleClick, data }) {
  const initialEmojiArray = data.map((obj) => decodeEntity(obj.htmlCode[0]));
  const pairedEmojiArray = initialEmojiArray.concat(initialEmojiArray); //Duplicate unique emojis
  const shuffledEmojiArray = getRandomEmojis(
    pairedEmojiArray,
    pairedEmojiArray.length
  );

  return (
    <ul className="card-container">
      {shuffledEmojiArray.map((emoji, index) => (
        <li key={index} className="card-item">
          <button className="btn btn--emoji" onClick={handleClick}>
            {emoji}
          </button>
        </li>
      ))}
    </ul>
  );
}
