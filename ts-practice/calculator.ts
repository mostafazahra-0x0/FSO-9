type Operation = 'multiply' | 'add' | 'divide';

const calculator = (
  a: number,
  b: number,
  op: Operation
): number => {
  if (op === 'multiply') {
    return a * b;
  } else if (op === 'add') {
    return a + b;
  } else if (op === 'divide') {
    if (b === 0) throw new Error('Can\'t divide by 0!');
    return a / b;
  } else {
    throw new Error('Operation is not multiply, add or divide!');
  }
}

try {
  console.log(calculator(2, 0, 'divide'));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong: ';
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}