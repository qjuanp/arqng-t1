module.exports = function service(options) {

  this.add({ type: 'calculadora', function: 'sumar' }, sumar)
  this.add({ type: 'calculadora', function: 'restar' }, restar)

  function sumar(msg, respond) {
    var vars = msg.vars;
    var num1 = vars.num1;
    var num2 = vars.num2;
    respond( null, { respond: num1+num2 });
  }

  function restar(msg, respond) {
      var vars = msg.vars;
      var num1 = vars.num1;
      var num2 = vars.num2;
      respond( null, { respond: num1-num2 });
  }

}
