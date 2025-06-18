export function getRandomEmojis(data, count) {
  const shuffled = [...data].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function getShuffledEmojis(data) {
  const pairedEmojiArray = data.concat(data);
  for (let i = pairedEmojiArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pairedEmojiArray[i], pairedEmojiArray[j]] = [
      pairedEmojiArray[j],
      pairedEmojiArray[i],
    ];
  }
  return pairedEmojiArray;
}
