export function capitalise(str: string): string {
  const capitalisedFirstLetter = str[0].toUpperCase();
  const remainingLetters = str.slice(1);
  return `${capitalisedFirstLetter}${remainingLetters}`;
}
