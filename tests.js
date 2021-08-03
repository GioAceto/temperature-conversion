const { describe, it } = require('mocha');
const { expect } = require('chai');
const getCelsius = require('./calculation');

describe('getCelsius', () => {
  it('should convert the provided number in fahrenheit to celsius', () => {
    let testNum = 32

    expect(getCelsius(testNum)).to.equal(0)
  })
})
