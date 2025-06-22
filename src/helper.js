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

export function getTimeByCardCount(count) {
  const num = Number(count);
  if (num === 5) return 30;
  if (num === 10) return 120;
  if (num === 20) return 240;
}
