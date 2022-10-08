
// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
// console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
// declaramos una funcion con el mismo nombre "formDollarToYan"
function fromDollarToYan(valueInDollar) {
    // convertimos el valor a Yan
    let valueInYan= parseFloat((valueInDollar * 127.9).toFixed(1));
    // devolvemos el valor
     return valueInYan
 }
 // declaramos una funcion con el mismo nombre "formYanToPound"
 function fromYanToPound(valueInYan) {
    let valueInPound= parseFloat((valueInYan * 0.8).toFixed(1));
     return valueInPound
 }


// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = {sum,fromEuroToDollar,fromDollarToYan,fromYanToPound};

// // app.js file content
// console.log("Hello World")


