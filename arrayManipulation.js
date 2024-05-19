// Function to process an array of numbers: squares evens and triples odds
function processArray(numbers) {
    return numbers.map(number => {
        if (number % 2 === 0) {
            // If the number is even, square it
            return number * number;
        } else {
            // If the number is odd, triple it
            return number * 3;
        }
    });
}

// Example usage of the function
console.log(processArray([1, 2, 3, 4]));  // Output should be [3, 4, 9, 16]

// Export the function if you are using modules (optional)
module.exports = processArray;
// Function to process an array of numbers: squares evens and triples odds
function processArray(numbers) {
    return numbers.map(number => {
        if (number % 2 === 0) {
            // If the number is even, square it
            return number * number;
        } else {
            // If the number is odd, triple it
            return number * 3;
        }
    });
}

// Function to format strings based on corresponding processed numbers
function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            // Capitalize the entire string if the number is even
            return str.toUpperCase();
        } else {
            // Convert the string to lowercase if the number is odd
            return str.toLowerCase();
        }
    });
}

// Example usage
const processedNumbers = processArray([1, 2, 3, 4]);
const formattedStrings = formatArrayStrings(['Hello', 'World', 'React', 'Native'], processedNumbers);

console.log(formattedStrings); // Output should be ['hello', 'WORLD', 'react', 'NATIVE']

// Export the functions if you are using modules (optional)
module.exports = { processArray, formatArrayStrings };
