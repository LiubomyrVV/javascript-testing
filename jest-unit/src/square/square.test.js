const square = require('./square')

describe('square', () => {
  let mockValue
  beforeEach(() => {
    mockValue = Math.random()
  })
  beforeAll(() => {
    // add something in database
  })
  test('Correct value', () => {
    // expect(square(2)).toBe(4)
    // expect(square(2)).toBeLessThan(5)
    // expect(square(2)).toBeGreaterThan(3)
    // expect(square(2)).not.toBeUndefined()
    const spyMathPow = jest.spyOn(Math, 'pow')
    square(2)
    expect(spyMathPow).toBeCalledTimes(1)
  })
  test('Check with 1', () => {
    const spyMathPow = jest.spyOn(Math, 'pow')
    square(1)
    expect(spyMathPow).toBeCalledTimes(0)
  })
  afterEach(() => {
    // delete from database
    jest.clearAllMocks() // clear all mocks for correct work jest
  })
  // afterAll()
})
