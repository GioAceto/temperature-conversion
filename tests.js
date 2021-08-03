const { describe, it } = require('mocha');
const { expect } = require('chai');
const getCelsius = require('./calculation');

describe('getCelsius', () => {
  it('should convert the provided number in fahrenheit to celsius', () => {
    let testNum = 32
    let testNum2 = -4
    let testNum3 = 84

    expect(getCelsius(testNum)).to.equal(0)
    expect(getCelsius(testNum2)).to.equal(-20)
    expect(getCelsius(testNum3)).to.equal(29)
  })
})
