import { decodeEntity } from "html-entities";
import { getRandomEmojis } from "../helper";

export default function MemoryCard({ handleClick, data }) {
  const pairedEmojiArray = data.concat(data); //Duplicate unique emojis
  const shuffledEmojiArray = getRandomEmojis(
    pairedEmojiArray,
    pairedEmojiArray.length
  );

  return (
    <ul className="card-container">
      {shuffledEmojiArray.map((emoji, index) => (
        <li key={index} className="card-item">
          <button
            className="btn btn--emoji"
            onClick={() => handleClick(emoji.name, index)}
          >
            {decodeEntity(emoji.htmlCode[0])}
          </button>
        </li>
      ))}
    </ul>
  );
}
