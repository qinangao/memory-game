import { decodeEntity } from "html-entities";
import EmojiButton from "./EmojiButton";

export default function MemoryCard({
  handleClick,
  data,
  selectedCard,
  matchCards,
}) {
  // console.log(matchCards);

  return (
    <ul className="card-container">
      {data.map((emoji, index) => {
        const selectedCardEntry = selectedCard.find(
          (card) => card.index === index
        );
        const matchedCardEntry = matchCards.find(
          (card) => card.index === index
        );
        const cardStyle = matchedCardEntry
          ? "card-item--matched"
          : selectedCardEntry
          ? "card-item--selected"
          : "";
        return (
          <li key={index} className={cardStyle}>
            <EmojiButton
              content={decodeEntity(emoji.htmlCode[0])}
              onClick={() => handleClick(emoji.name, index)}
              selectedCardEntry={selectedCardEntry}
              matchedCardEntry={matchedCardEntry}
            />
          </li>
        );
      })}
    </ul>
  );
}
