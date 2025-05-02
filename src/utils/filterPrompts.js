export function filterPrompts(data, { grammar, level, topic, gameType }) {
  return data.filter(
    (item) =>
      item.grammar === grammar &&
      item.level === level &&
      item.topic === topic &&
      item.gameTypes.includes(gameType)
  );
}