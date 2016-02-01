module.exports = function service(options) {

  this.add({ type: 'calculadora', function: 'sumar' }, sumar)
  this.add({ type: 'calculadora', function: 'restar' }, restar)

  function sumar(msg, respond) {
    var nums = msg.vars.nums;
    var result = 0;
    
    nums.forEach(function(num) {
        result += num;    
    }, this);
    
    respond( null, { respond: result });
  }

  function restar(msg, respond) {
     var nums = msg.vars.nums;
     var result = 0;
        
     nums.forEach(function(num) {
        result -= num;    
     }, this);
        
     respond( null, { respond: result });
  }

}
