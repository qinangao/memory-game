import { decodeEntity } from "html-entities";
import { useGame } from "../useGame";

function EmojiButton({
  onClick,
  selectedCardEntry,
  matchedCardEntry,
  emoji,
  index,
}) {
  const btnContent =
    selectedCardEntry || matchedCardEntry
      ? decodeEntity(emoji.htmlCode[0])
      : "?";
  const btnStyle = matchedCardEntry
    ? "btn--emoji__back--matched"
    : selectedCardEntry
    ? "btn--emoji__back--selected"
    : "btn--emoji__front";

  const btnAria = matchedCardEntry
    ? `${emoji.name}. Matched.`
    : selectedCardEntry
    ? `${emoji.name}. Not matched yet.`
    : "Card upside down.";

  const { isGameOn, isTimeUp, areAllCardMatched } = useGame();

  return (
    <button
      className={`btn btn--emoji ${btnStyle}`}
      onClick={selectedCardEntry ? null : onClick}
      disabled={
        !!matchedCardEntry || !isGameOn || isTimeUp || areAllCardMatched
      }
      aria-label={`Position ${index + 1}: ${btnAria}`}
      aria-live="polite"
    >
      {btnContent}
    </button>
  );
}

export default EmojiButton;
