const mapArrToString = (arr) => {
  return arr.filter((item) => Number.isInteger(item)).map(String)
}
console.log(mapArrToString([1, 2, 3]))
module.exports = mapArrToString
