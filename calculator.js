/**
 * Simple Calculator in JavaScript
 * Provides basic arithmetic operations
 */

class Calculator {
    constructor() {
        this.history = [];
    }

    add(a, b) {
        const result = a + b;
        this.history.push(`${a} + ${b} = ${result}`);
        return result;
    }

    subtract(a, b) {
        const result = a - b;
        this.history.push(`${a} - ${b} = ${result}`);
        return result;
    }

    multiply(a, b) {
        const result = a * b;
        this.history.push(`${a} × ${b} = ${result}`);
        return result;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero!");
        }
        const result = a / b;
        this.history.push(`${a} ÷ ${b} = ${result}`);
        return result;
    }

    getHistory() {
        return this.history;
    }

    clearHistory() {
        this.history = [];
    }
}

// Example usage
function demoCalculator() {
    const calc = new Calculator();
    
    console.log("Calculator Demo:");
    console.log("5 + 3 =", calc.add(5, 3));
    console.log("10 - 4 =", calc.subtract(10, 4));
    console.log("6 × 7 =", calc.multiply(6, 7));
    console.log("15 ÷ 3 =", calc.divide(15, 3));
    
    console.log("\nCalculation History:");
    calc.getHistory().forEach(entry => console.log(entry));
}

// Run demo if this file is executed directly
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Calculator;
} else {
    // Browser environment
    window.Calculator = Calculator;
    demoCalculator();
}
