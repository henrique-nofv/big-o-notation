/*
  O(1) -> Constant time
  O número de operações não altera conforme o crescimento dos inputs.
*/
const persons = new Array(10500000).fill('Henrique', 0);

const firstItemInArray = (array) => {
  return array[0];
}

console.log(firstItemInArray(persons))
