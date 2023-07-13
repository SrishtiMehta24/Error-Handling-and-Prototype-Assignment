function getPerson(obj) {
    try {
      if (typeof obj !== 'object' || obj === null || !('name' in obj) || !('age' in obj)) {
        throw new Error('Invalid parameter type');
      }
      
      const { name, age } = obj;
      return `Name: ${name}, Age: ${age}`;
    } catch (error) {
      return error.message;
    }
  }
  
  // Usage examples:
  console.log(getPerson({ name: 'Alice', age: 25 })); // Output: Name: Alice, Age: 25
  console.log(getPerson({ name: 'Bob' })); // Output: Invalid parameter type
  console.log(getPerson('John')); // Output: Invalid parameter type
  console.log(getPerson(null)); // Output: Invalid parameter type
  
