let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit")


const getCelsius = (num) => {
  let result = Math.round((num - 32) * 0.5556)
  return result
}

const getFahrenheit = (num) => {
  let result = Math.round((num * 1.8) + 32)
  return result
}

const calcF = () => {
  fahrenheit.value = getFahrenheit(celsius.value)
}

const calcC = () => {
  celsius.value = getCelsius(fahrenheit.value)
}


module.exports = { getCelsius, getFahrenheit }