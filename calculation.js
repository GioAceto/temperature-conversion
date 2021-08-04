const getCelsius = (num) => {
  let result = Math.round((num - 32) * 0.5556)
  return result
}

const getFahrenheit = (num) => {
  let result = Math.round((num * 1.8) + 32)
  return result
}

module.exports = { getCelsius, getFahrenheit }