// 装饰器
function helloWord(target:any) {
  console.log(target, '参数')
  console.log('hello word')
}


@helloWord
class HelloWordClass {
  constructor() {
    console.log('我是构造函数')
  }
  name: string = 'zzb';
}

