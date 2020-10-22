let multiply = (x, y) => {
  return x * y;
};

let square = (x) => {
  return multiply(x, x);
};

let isNumber = (a, b, c) => {
  return square(a) + square(b) === square(c);
};

console.log(isNumber(3, 4, 5));
