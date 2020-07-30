import functions  from './functions'

describe('Function Example test', () => {
  test('Total function should work as expeced', () => {
    const input = [1,2];
    const output = 3
    expect(functions.total(input[0],input[1])).toEqual(output);
  })

  test('Check null', () => {
    expect(functions.isNull()).toBeNull();
  })

  test('Check value', () => {
    const input = 3;
    const output = 3
    expect(functions.checkValue(3)).toEqual(output);
  })
})