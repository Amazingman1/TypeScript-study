// function join(first: string| number, second: string|number) {
//   return `${first}${second}`
// }

// join('wwww', '@qq')

// console.log(join('wwww', '@qq'));

function join<AddType>( first: AddType, second: AddType) {
  return `${first}${second}`
}

console.log(join<number>(1, 2));
