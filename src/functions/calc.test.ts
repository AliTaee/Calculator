import { operationType } from '../model/calc'
import {
  sumNumbers,
  subtractNumbers,
  multiplicationNumbers,
  divisionNumbers,
  delNumber,
  numPad,
} from './calc'
import calc from './calc'

describe('Test sum functionality', () => {
  test.each([
    [3, 5, 8],
    [0, 5, 5],
    [0, 0, 0],
  ])('%i + %i => %i', (num1, num2, result) => {
    expect(sumNumbers(num1, num2)).toBe(result)
  })
})

describe('Test subtract functionality', () => {
  test.each([
    [8, 5, 3],
    [0, 5, -5],
    [10, 5, 5],
    [0, 0, 0],
  ])('%i - %i => %i', (num1, num2, result) => {
    expect(subtractNumbers(num1, num2)).toBe(result)
  })
})

describe('Test multiplicationNumbers functionality', () => {
  test.each([
    [8, 5, 40],
    [0, 5, 0],
    [10, 50, 500],
    [0, 0, 0],
  ])('%i * %i => %i', (num1, num2, result) => {
    expect(multiplicationNumbers(num1, num2)).toBe(result)
  })
})

describe('Test division functionality', () => {
  test.each([
    [10, 5, 2],
    [100, 10, 10],
  ])('%i / %i => %i', (num1, num2, result) => {
    expect(divisionNumbers(num1, num2)).toBe(result)
  })
})

describe('Test delete number functionality', () => {
  test.each([
    [10, 1],
    [12345, 1234],
    [871, 87],
    [4521, 452],
  ])('%i delete => %i', (num1, result) => {
    expect(delNumber(num1)).toBe(result)
  })
})

describe('Test padNum functionality', () => {
  test.each([
    [10, 1, 101],
    [1234, 5, 12345],
    [871, 9, 8719],
    [4521, 0, 45210],
  ])('%i add %i => %i', (num1, num2, result) => {
    expect(numPad(num1, num2)).toBe(result)
  })
})

describe('Test calc functionality', () => {
  test.each([
    [10, 1, '+', 11],
    [10, 1, '*', 10],
    [10, 1, '-', 9],
    [10, 2, '/', 5],
    [10, 0, 'numpad', 100],
    [1234, 0, 'del', 123],
    [1234, 0, 'reset', 0],
  ])('%i %i with operation %j = %i', (num1, num2, operation, result) => {
    expect(calc(num1, num2, operation as operationType)).toBe(result)
  })
})
