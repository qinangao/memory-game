import EmojiButton from "./EmojiButton";

export default function MemoryCard({
  handleClick,
  data,
  selectedCard,
  matchCards,
}) {
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
              emoji={emoji}
              onClick={() => handleClick(emoji.name, index)}
              selectedCardEntry={selectedCardEntry}
              matchedCardEntry={matchedCardEntry}
              index={index}
            />
          </li>
        );
      })}
    </ul>
  );
}
