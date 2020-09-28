function print() {
    var sep = ' ';
    var toprint = '';
    for (var i = arguments.length - 1; i >= 0; i--) {
        arg = arguments[arguments.length - i - 1];
        if (typeof arg === 'string' || arg instanceof String) {

        } else {
            arg = arg.toString();
        }
        toprint += arg + sep;
    }
    console.log(toprint);
}
function max(array1){
  return Math.max(...array1)
}
function min(array1){
  return Math.min(...array1)
}
function sum(array1){
  var sumArray = array1.reduce(function(a, b){
      return a + b;
  }, 0);
  return sumArray;
}

function round(number){
  return Math.round(number);
}

function int(number_string){
  return parseInt(number_string);
}

function reverse(array1){
  return array1.reverse();
}

function len(object1){
  return object1.length;
}

function checkTrue(element){
  return element === true;
}
function all(array1){
  return array1.every(checkTrue);
}
function any(array1){
  return array1.some(function(e) {
      return e === true;
  });
}

function abs(number1){
  return Math.abs(number1);
}

print(1, 2, 3, 4)
print(max([1, 2, 100]));
print(min([1, 2, 100]));
print(sum([1, 2, 100]));
print(round(9.12));
print(int('90') + 2);
print(2**6);
print(reverse([1, 2, 3, 4, 5]))
print(len([1, 2, 3]))
print(all([true, true]))
print(any([false, false, false]))
print(abs(-1))
