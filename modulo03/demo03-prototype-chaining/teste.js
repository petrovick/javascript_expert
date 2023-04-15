const assert = require('assert')

function Employee() {}
Employee.prototype.salary = () => "salary**"

class ClasseTeste extends Object {
  salary() {
    return "salary**"
  }
}

console.log('Employee.prototype.salary(): ', Employee.prototype)
console.log('ClasseTeste.prototype.salary(): ', ClasseTeste.__proto__)

console.log('Employee.prototype.prototype: ', Employee.prototype.prototype)
console.log('ClasseTeste.prototype.prototype: ', ClasseTeste.prototype.prototype)

assert.deepStrictEqual(Employee.prototype.prototype, ClasseTeste.prototype.prototype)