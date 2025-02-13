function add(a, b) { return a + b; }

function subtract(a, b) { return a - b; }

function multiply(a, b) { return a * b; }

function divide(a, b) { 
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  if (b === 0) { 
    throw new Error('Division by zero'); 
  }
  return a / b; 
}

// Example usage with error handling
try {
  console.log(divide(10, 2)); // Output: 5
  console.log(divide(10, 0)); // Throws an error
  console.log(divide(10, 'hello')); // Throws an error
} catch (error) {
  console.error('An error occurred:', error.message);
}
