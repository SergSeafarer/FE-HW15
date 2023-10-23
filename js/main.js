/*const array = [0, 1, 's', '+', {}, 5, 6, 7, 'k'];
const averageOfNumbers = function(anyArray) {
  const arrayOfNumbers = anyArray.filter(number => isNaN(number) === false);
  if(arrayOfNumbers.length === 0) {
    document.write('Given array doesn`t have any number');
  }
  const sumOfElements = arrayOfNumbers.reduce(function(allNumbers, currentNumber){
    return allNumbers + currentNumber;
  }, );
  const averageResult = sumOfElements / arrayOfNumbers.length;
  return averageResult;
}
const result = averageOfNumbers(array);
document.write('Task 1: ' + result);*/

const doMath = function(x, znak, y) {
  if(isNaN(x) || isNaN(y)) {
    return alert('Given value is not a number');
  }
  if(znak !== '+' && znak !== '-' && znak !== '*' && znak !== '/' && znak !== '%' && znak !== '^') {
    return alert('Incorrect action choosen');
  }
  if(znak === '+') {
    return alert(x + y);
  }
  if(znak === '-') {
    return alert(x - y);
  }
  if(znak === '*') {
    return alert(x * y);
  }
  if(znak === '/' && y !== 0) {
    return alert(x / y);
  }
  if(znak ==='/' && y === 0) {
    return alert('Its prohibbited devide by zero');
  }
  if(znak === '%') {
    return alert(x % y);
  }
  if(znak === '^') {
    return alert(x ** y);
  }
}
const x = +prompt('Enter first number');
const y = +prompt('Enter second number');
const znak = prompt('Enter action'); 
doMath(x, znak, y);