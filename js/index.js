const x = Number(prompt('Enter N'));

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

document.write(fib(x));
document.write('<br>');

function fibonacci(n) {
  let a = 1,
    b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
document.write(fibonacci(x));

function fibonac(x) {

  let sequence = [1, 1];

  for (let i = 2; i < x; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  return sequence[x - 1];
}
document.write('<br>');
document.write(fibonac(x));
