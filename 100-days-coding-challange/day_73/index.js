// LeetCode 682. Baseball Game

/**
 * @param {string[]} operations
 * @return {number}
 */

var calPoints = function (ops) {
  let stack = [];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] == "C") {
      stack.pop();
    } else if (ops[i] == "+") {
      stack.push(
        Number(stack[stack.length - 1] || 0) +
          Number(stack[stack.length - 2] || 0)
      );
    } else if (ops[i] == "D") {
      stack.push(stack[stack.length - 1] * 2);
    } else if (!isNaN(ops[i]) && typeof Number(ops[i]) == "number") {
      stack.push(ops[i]);
    }
  }
  return stack.reduce(
    (previousValue, currentValue) =>
      Number(previousValue) + Number(currentValue),
    0
  );
};
