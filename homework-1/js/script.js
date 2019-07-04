// Определить переменные для всех примитивом JavaScript

const stringVariable = "Hello";
const numberVariable = 15;
const booleanVariable = true;
const nullVariable = null;
const undefinedVariable = undefined;
const symbolVariable = Symbol();

// Написать функцию принимающую число и
// возвращающую его факториал по всем правилам тайпскрипта

function factorial(value) {
  return value === 0 ? 1 : value * factorial(value - 1);
}

console.log("Factorial:", factorial(5));

// Написать функцию принимающую число и
// возврашающую массив с числами фибоначи до этого порядкового числа

function fibonacci(number) {
  const fibonacciArray = [1, 1];

  for (i = 2; i < number; i++) {
    fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
  }
  return fibonacciArray.slice(0, number);
}

console.log("Fibonacci:", fibonacci(6));
