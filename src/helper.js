export function getRandomEmojis(data, count) {
  const shuffled = [...data].sort(() => 0.5 - Math.random());
  // Fisher-Yates shuffle
  // for (let i = shuffled.length - 1; i > 0; i--) {
  //   const j = Math.floor(Math.random() * (i + 1));
  //   [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  // }
  // return shuffled.slice(0, count);
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
