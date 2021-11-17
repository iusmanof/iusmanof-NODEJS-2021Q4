const optionC = require('./constData')
const optionConfig = require('./constData')
const optionInput = require('./constData')
const optionOutput = require('./constData')

test('Test -c', () =>{
  expect(optionC.optionC).toBe('-c')
})

test('Test --config', () =>{
  expect(optionConfig.optionConfig).toBe('--config')
})

test('Test -i', () =>{
  expect(optionInput.optionInput).toBe('-i')
})

test('Test -o', () =>{
  expect(optionOutput.optionOutput).toBe('-o')
})
