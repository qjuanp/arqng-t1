var seneca = require('seneca')()
var client = seneca.client({ host:'localhost', port:8080 })

var number1 = 1;
var number2 = 2;

// Envia al topico de la suma los operandos y espera respuesta
client.act({ type: 'calculadora', function: 'sumar', vars:{"num1":number1,"num2":number2}}, function (err, result) {
  console.log(result);
})

// Envia al topico de la resta los operandos y espera respuesta
client.act({ type: 'calculadora', function: 'restar', vars:{"num1":number1,"num2":number2}}, function (err, result) {
  console.log(result);
})
