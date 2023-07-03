const getAllPoweredValuesLimitedByNumber = (initialValue: number): number[] => {
  const tablica: number[] = [];
  let squareNumber = 0;

  for (let i = 1; squareNumber <= initialValue; i++) {
    squareNumber = Math.pow(i, 2);

    if (squareNumber < initialValue) {
      tablica.push(squareNumber);
    }
  }

  return tablica;
};

console.log(getAllPoweredValuesLimitedByNumber(144));
