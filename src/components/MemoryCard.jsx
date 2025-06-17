import { decodeEntity } from "html-entities";
import { getRandomEmojis } from "../helper";

/**
 * todo:
 * step1: Get ramdon 5 emojis in API
 * step2:Duplicate each emojis
 *step 3: Shuffle emojis data
 */

export default function MemoryCard({ handleClick, data }) {
  const emojiArray1 = data.map((obj) => decodeEntity(obj.htmlCode[0]));
  const emojiArray = emojiArray1.concat(emojiArray1);
  const shuffledEmojiArray = getRandomEmojis(emojiArray, emojiArray.length);

  const emojiEl = shuffledEmojiArray.map((emoji, index) => (
    <li key={index} className="card-item">
      <button className="btn btn--emoji" onClick={handleClick}>
        {emoji}
      </button>
    </li>
  ));

  return <ul className="card-container">{emojiEl}</ul>;
}
