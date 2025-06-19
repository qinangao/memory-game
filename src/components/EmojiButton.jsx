function EmojiButton({
  content,
  onClick,
  selectedCardEntry,
  matchedCardEntry,
}) {
  const btnContent = selectedCardEntry || matchedCardEntry ? content : "?";
  const btnStyle = matchedCardEntry
    ? "btn--emoji__back--matched"
    : selectedCardEntry
    ? "btn--emoji__back--selected"
    : "btn--emoji__front";

  return (
    <button className={`btn btn--emoji ${btnStyle}`} onClick={onClick}>
      {btnContent}
    </button>
  );
}

export default EmojiButton;
