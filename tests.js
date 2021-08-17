const { describe, it } = require('mocha');
const { expect } = require('chai');
const { getCelsius, getFahrenheit } = require('./calculation');

describe('getCelsius', () => {
  it('should convert the freezing temp of water in fahrenheit to celsius', () => {
    let testNum = 32

    expect(getCelsius(testNum)).to.equal(0);
  })

  it('should convert a negative temp in fahrenheit to celsius', () => {
    let testNum = -4

    expect(getCelsius(testNum)).to.equal(-20);
  })

  it('should round the result temp to the closest integer', () => {
    let testNum = 84

    expect(getCelsius(testNum)).to.equal(29);
  })
})

describe('getFahrenheit', () => {
  it('should convert the freezing temp of water in celsius to fahrenheit', () => {
    let testNum = 0

    expect(getFahrenheit(testNum)).to.equal(32);
  })

  it('should convert a negative temp in celsius to fahrenheit', () => {
    let testNum = -15

    expect(getFahrenheit(testNum)).to.equal(5);
  })

  it('should round the result temp to the closest integer', () => {
    let testNum = 21

    expect(getFahrenheit(testNum)).to.equal(70);
  })
})
