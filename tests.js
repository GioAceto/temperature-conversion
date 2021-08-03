const { describe, it } = require('mocha');
const { expect } = require('chai');
const getCelsius = require('./calculation');

describe('getCelsius', () => {
  it('should convert the provided number in fahrenheit to celsius', () => {
    expect(getCelsius(32).to.equal(0))
  })
})
