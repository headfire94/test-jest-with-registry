/* eslint-env jest */
const { client } = require('./client')
const { doMath } = require('./do-math')

jest.mock('./client', () => ({
  client: {
    sum: (a, b) => a * a * b
  }
}))

describe('sum()', () => {
  test('should multiply', () => {
    const actual = doMath()

    expect(actual).toEqual(125)
  })
})
