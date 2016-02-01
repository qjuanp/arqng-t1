var seneca = require('seneca')()
var client = seneca.client({ host:'localhost', port:8080 })

var numbers = [1, 2, 5];

// Envia al topico de la suma los operandos y espera respuesta
client.act({ type: 'calculadora', function: 'sumar', vars:{"nums": numbers}}, function (err, result) {
  console.log(result);
})

// Envia al topico de la resta los operandos y espera respuesta
client.act({ type: 'calculadora', function: 'restar', vars:{"nums":numbers}}, function (err, result) {
  console.log(result);
})
