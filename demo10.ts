class Lady {
  content = 'hi 你好!'
  name: 'zhehsi'
  sayHello() {
    return this.content
  }
}

const godds = new Lady()
// console.log(godds.sayHello())

class XiaoJieJie extends Lady {
  
  sayHello() {
    return super.sayHello() + '美女'
  }
  sayLove() {
    return '滚'
  }
}

const newDog = new XiaoJieJie()
console.log(newDog.sayHello())
console.log(newDog.sayLove())
