/*
  O(n^2) ->
  O número de operações é sempre elevada ao quadrado quando temos funções aninhadas (ex: um loop dentro de outro)
*/
const numbers = [1,2,3,4,5]

numbers.forEach((box) => {
  numbers.forEach(box2 => console.log(box, box2))
})
