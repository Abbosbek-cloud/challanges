// LeetCode 69. Sqrt(x)

/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function (x) {
  let i = 1;
  const found = false;
  while (!found) {
    if (i * i === x) {
      return Math.floor(i);
    } else if (i * i > x) {
      let res = square(x, i - 1, i);
      return Math.floor(res);
    }
    i++;
  }
};

function square(n, i, j) {
  let mid = (i + j) / 2;
  let mul = mid * mid;
  if (mul === n || Math.abs(mul - n) < 0.00001) {
    return mid;
  } else if (mul < n) {
    return square(n, mid, j);
  } else {
    return square(n, i, mid);
  }
}

// LeetCode 202. Happy number

/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function (n) {
  let set = new Set();
  while (n != 1 && !set.has(n)) {
    set.add(n);
    n = next_number(n);
  }

  return n == 1;
};

function next_number(n) {
  let sum = 0;
  while (n > 0) {
    [s, digit] = divmod(n, 10);
    n = s;
    sum += digit ** 2;
  }
  return sum;
}

function divmod(x, y) {
  return [Math.floor(x / y), x % y];
}
