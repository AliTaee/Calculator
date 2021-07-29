import { operationType, numberType } from '../model/calc'

function sumNumbers(number1: numberType, number2: numberType) {
  return number1 + number2
}

function subtractNumbers(number1: numberType, number2: numberType) {
  return number1 - number2
}

function multiplicationNumbers(number1: numberType, number2: numberType) {
  return number1 * number2
}

function divisionNumbers(number1: numberType, number2: numberType) {
  return number1 / number2
}

function delNumber(number: numberType) {
  return Math.floor(number / 10)
}

function numPad(currentNumber: numberType, number: numberType) {
  return Number(`${currentNumber}${number}`)
}

function calc(
  preNumber: numberType,
  newNumber: numberType,
  operation: operationType,
) {
  let result = 0

  switch (operation) {
    case '+':
      result = sumNumbers(preNumber, newNumber)
      break
    case '-':
      result = subtractNumbers(preNumber, newNumber)
      break
    case '*':
      result = multiplicationNumbers(preNumber, newNumber)
      break
    case '/':
      result = divisionNumbers(preNumber, newNumber)
      break
    case 'del':
      result = delNumber(preNumber)
      break
    case 'reset':
      result = 0
      break
    case 'numpad':
      result = numPad(preNumber, newNumber)
      break
    default:
      throw 'the operation type is not correct!'
  }
  return result
}

export {
  numPad,
  delNumber,
  sumNumbers,
  divisionNumbers,
  subtractNumbers,
  multiplicationNumbers,
}
export default calc
