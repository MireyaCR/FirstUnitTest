// // importar la función sum del archivo app.js
// const { sum } = require('./app.js');

// // comienza tu primera prueba
// test('adds 14 + 9 to equal 23', () => {
//     //dentro de la prueba llamamos a nuestra función sum con 2 números
//     let total = sum(14, 9);

//     // esperamos que la suma de esos 2 números sea 23
//     expect(total).toBe(23);
// });

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One Dollar should be 127.9 yenes", function(){
    // importo la funcion desde app.js
    const { fromDollarToYan } = require('./app.js')    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYan(3.5)).toBe(447.7); //1 dollar son 127.9 yenes, entonces 3.5 dolares deberian ser = (127.9 * 3.5)
})

test("One yen should be 0.8 Dollars", function(){
    // importo la funcion desde app.js
    const { fromYanToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYanToPound(3.5)).toBe(2.8); //1 yen son 0.8 dolares, entonces 3.5 yenes deberian ser = (0.8 * 3.5)
})