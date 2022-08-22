/*
  O(n!) ->
  Pior caso possível, executa um novo loop para cada novo elemento, calculo fatorial é um exemplo.
  6! -> 1x2x3x4x5x6 = 720.
*/
const factorial = number => {
  let num = number;

  if (number === 0) return 1;

  for (let i = 0; i < num; i++) {
    num = number * factorial(number - 1);
  }

  return num;
}

const startTimePerformance = performance.now();

new Promise((resolve) => resolve(factorial(6))).then((value) => {
  const endTimePerformance = performance.now();
  
  console.log(`Running in ${endTimePerformance - startTimePerformance} milliseconds with value ${value}`);
})

