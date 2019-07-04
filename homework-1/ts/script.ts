// Определить переменные для всех примитивом JavaScript

const stringVariable: string = "Hello";
const numberVariable: number = 15;
const booleanVariable: boolean = true;
const nullVariable: null = null;
const undefinedVariable: undefined = undefined;
const symbolVariable: symbol = Symbol();

// Написать функцию принимающую число и
// возвращающую его факториал по всем правилам тайпскрипта

function factorial(value: number): number {
  return value === 0 ? 1 : value * factorial(value - 1);
}

console.log("Factorial:", factorial(5));

// Написать функцию принимающую число и
// возврашающую массив с числами фибоначи до этого порядкового числа

function fibonacci(number: number): Array<number> {
  let i: number;
  const fibonacciArray: number[] = [1, 1];

  for (i = 2; i < number; i++) {
    fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
  }
  return fibonacciArray.slice(0, number);
}

console.log("Fibonacci:", fibonacci(10));
