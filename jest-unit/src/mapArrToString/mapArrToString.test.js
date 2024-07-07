const mapArrToString = require('./mapArrToString')

describe('mapArrToStrings', () => {
  test('Correct value', () => {
    expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3'])
  })
  test('Other types in array', () => {
    expect(mapArrToString([1, 2, 3, null, undefined, 'asdasasd'])).toEqual([
      '1',
      '2',
      '3',
    ])
  })
  test('Empty array', () => {
    expect(mapArrToString([])).toEqual([])
  })
  test('Not equal', () => {
    expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3, 4])
  })
})
