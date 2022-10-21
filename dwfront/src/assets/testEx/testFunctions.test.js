const Func = require('./testFunctions')

test('Add two values', ()=> {
    expect(Func.sum(1,2)).toBe(3)
})

test('Subtract two values', ()=> {
    expect(Func.subtract(5,1)).toBe(4)
})

test('Pass Test', ()=> {
    expect(true).toBe(true)
})

