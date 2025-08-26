#!/usr/bin/env python3
"""
Simple Hello World script with some basic Python features.
"""

def greet(name="World"):
    """Return a greeting message."""
    return f"Hello, {name}!"

def calculate_sum(a, b):
    """Calculate the sum of two numbers."""
    return a + b

def main():
    """Main function to demonstrate the code."""
    print(greet())
    print(greet("Python"))
    
    # Demonstrate some calculations
    num1, num2 = 10, 20
    result = calculate_sum(num1, num2)
    print(f"The sum of {num1} and {num2} is: {result}")
    
    # Simple list operations
    numbers = [1, 2, 3, 4, 5]
    print(f"Numbers: {numbers}")
    print(f"Sum of numbers: {sum(numbers)}")
    print(f"Average: {sum(numbers) / len(numbers):.2f}")

if __name__ == "__main__":
    main()
