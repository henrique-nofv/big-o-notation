/*
  O(n) -> Linear time
  O número de operações cresce proporcionalmente conforme a quantidade de entradas.
*/
const persons = new Array(10500000).fill('Henrique', -1);

const hasValueInArray = (array, value) => {
  const startTimePerformance = performance.now()
  
  const itemExists = array.some(item => item?.toLowerCase() === value?.toLowerCase());

  const endTimePerformance = performance.now()

  console.log(`Running in ${endTimePerformance - startTimePerformance} milliseconds`)
  
  return itemExists
}

hasValueInArray(persons, 'Henrique')
