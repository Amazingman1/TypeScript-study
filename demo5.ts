// 函数返回值简单类型
function getTotal (one: number, tow: number): number {
  return one + tow
}
const total = getTotal(1,2)

//函数无返回值
function sayHellow (): void {
  console.log('hhh')
}

// 函数参数为对象
function getNumber ({one}:{one:number}) : number {
  return one
}

function getAll ({one, tow}:{one: number, tow:number}):number {
  return one + tow
}

const all = getAll({ one : 1, tow : 3 })