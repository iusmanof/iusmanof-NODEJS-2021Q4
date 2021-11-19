const { checkOption } = require('../helpers/checkOption')

test('Check option', () => {
  expect(checkOption(['-c'], '-c')).toBeTruthy()
})

test('Check option', () => {
  expect(checkOption(['--config'], '--config')).toBeTruthy()
})

test('Check option', () => {
  expect(checkOption(['-i'], '-i')).toBeTruthy()
})

test('Check option', () => {
  expect(checkOption(['-o'], '-o')).toBeTruthy()
})