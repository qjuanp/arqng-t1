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

client.act({ type: 'calculadora', function: 'multiplicar', vars:{ nums: [2,5,3]}}, function(err, result){
    console.log(result);
})

client.act({ type: 'calculadora', function: 'dividir', vars:{ nums: [10,2,5]}}, function(err, result){
    console.log(result);
})

client.act({ type: 'calculadora', function: 'dividir', vars:{ nums: [10,0,5]}}, function(err, result){
    if(err) console.error(err);
    else console.log(result);
})