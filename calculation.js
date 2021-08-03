const getCelsius = (num) => {
  let result = Math.round((num - 32) * 0.5556)
  return result
}

module.exports = getCelsius