const validateValue = require('./validateValue')

test('Value Validation', () => {
  expect(validateValue(50)).toBe(true)
})

describe('validateValue', () => {
  test('Correct value', () => {
    expect(validateValue(50)).toBe(true)
  })

  test('Border value on the bottom', () => {
    expect(validateValue(0)).toBe(true)
  })
  test('Border value on the top', () => {
    expect(validateValue(100)).toBe(true)
  })

  test('Less then correct value', () => {
    expect(validateValue(-1)).toBe(false)
  })
  test('More then correct value', () => {
    expect(validateValue(101)).toBe(false)
  })
})
