  //TASK 1
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

  //TASK 2
/*const doMath = function(x, znak, y) {
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
doMath(x, znak, y);*/

  //TASK 3
/*const fillArray = function(someArray) {
const lengthOfMainArray = prompt('Enter length of main array');
if(lengthOfMainArray === null) {
  alert('Sorry, but you refused to enter value');
  return;
}
if(+lengthOfMainArray === 0 || +lengthOfMainArray < 0 || isNaN(+lengthOfMainArray)) {
  alert ('Incorrect length value entered');
  return;
}
someArray.length = +lengthOfMainArray;
for(let i = 0; i < someArray.length; i++) {
  let lengthOfInternalArray = prompt('Enter length of ' + (i+1) + ' internal array');
  if(lengthOfInternalArray === null) {
    alert('Sorry, but you refused to enter value');
    break;
  }
  if(+lengthOfInternalArray === 0 || +lengthOfInternalArray < 0 || isNaN(+lengthOfInternalArray)) {
    alert('Incorrect length value entered');
    break;
  }
  let internalArray = new Array(+lengthOfInternalArray);
  someArray[i] = internalArray;
  for(let k = 0; k < someArray[i].length; k++) {
    let elements = prompt('Enter elements for this array');
    if(elements === null) {
      alert('Sorry, you refused to enter value');
      break;
    }
    if(isNaN(elements)) {
    someArray[i][k] = elements;
    } else {
      someArray[i][k] = +elements;
    }
  }
} 
} 
const newArray = [];
fillArray(newArray);
document.write(JSON.stringify(newArray));*/

  //TASK 4
const removeSymbol = function(someString, symbolsToRemove) {
  const messageEmptyString = 'You didnt enter any string';
  if(someString === null) {
    return messageEmptyString;
  }
  if(symbolsToRemove === null) {
    return someString;
  }
  for(let i = 0; i < symbolsToRemove.length; i++) {
    if(someString.includes(symbolsToRemove[i]) && symbolsToRemove[i] !== ' ') {
      someString = someString.replaceAll(symbolsToRemove[i], '');
    }
  }
  return someString;
}
const userString = prompt('Enter any string');
const userSymbolRemove = prompt('Enter symbols to remove');
const finalString = removeSymbol(userString, userSymbolRemove);
document.write(finalString);
