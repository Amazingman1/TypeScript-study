// class Xiaojiejie {
//   constructor(private _age: number) {}
//   // get age() {
//   //   return this._age
//   // }
// }
enum Status {
  MASSAGE,
  SPA,
  DABAOJIAN,
}

function getserver(status:any) {
  return Status[status]
}

console.log(getserver(1))
