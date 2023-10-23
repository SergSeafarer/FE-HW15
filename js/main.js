const array = [0, 1, 's', '+', {}, 5, 6, 7, 'k'];
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
document.write('Task 1: ' + result);