const getSkippedSentence = (sentence: string, skip: number): string => {
  if (sentence.length === 0) {
    console.log("Argument 'sentence' jest pusty.");
    return "";
  }
  if (sentence.length <= skip) {
    console.log("Argument 'sentence' jest zbyt krótki.");
    return "";
  }

  let newString = "";

  for (let i = 0; i < sentence.length; i += skip) {
    newString = newString + sentence.charAt(i);
  }

  return newString;
};

console.log(getSkippedSentence("", 3));
