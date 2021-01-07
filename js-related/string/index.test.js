import { repeat, padStart, padEnd } from './index.finish'

test('repeat', () => {
  expect(repeat('allen', 2)).toEqual('allenallen')
})

describe('pad', () => {
  test('padStart', () => {
    expect(padStart('abc', 8)).toEqual('     abc')
    expect(padStart('abc', 10, 'foo')).toEqual('foofoofabc')
    expect(padStart('abc', 6, '123465')).toEqual('123abc')
    expect(padStart('abc', 8, '0')).toEqual('00000abc')
    expect(padStart('abc', 1)).toEqual('abc')
  })
  test('padEnd', () => {
    expect(padEnd('abc', 10)).toEqual('abc       ')
    expect(padEnd('abc', 10, 'foo')).toEqual('abcfoofoof')
    expect(padEnd('abc', 6, '123456')).toEqual('abc123')
    expect(padEnd('abc', 1)).toEqual('abc')
  })
})
