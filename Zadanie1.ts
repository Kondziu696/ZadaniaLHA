const getRandomElement = (array: string[]): string => {
  if (array.length === 0) {
    console.log("Brak elementów");
    return "";
  }

  const result = array[Math.floor(Math.random() * array.length)];
  return result;
};

const exampleArray = ["raz"];
const result1 = getRandomElement(exampleArray);
const result2 = getRandomElement(exampleArray);

console.log(result1);
console.log(result2);
