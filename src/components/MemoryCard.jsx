import { useGame } from "../useGame";
import EmojiButton from "./EmojiButton";
import Timer from "./Timer";

export default function MemoryCard() {
  const { emojisData, turnCard, matchCards, selectedCard } = useGame();
  return (
    <>
      <Timer />
      <ul className="card-container">
        {emojisData.map((emoji, index) => {
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
                emoji={emoji}
                onClick={() => turnCard(emoji.name, index)}
                selectedCardEntry={selectedCardEntry}
                matchedCardEntry={matchedCardEntry}
                index={index}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
