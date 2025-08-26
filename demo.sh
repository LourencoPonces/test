#!/bin/bash

# Simple Demo Script
# This script demonstrates basic bash functionality

echo "🚀 Welcome to the Demo Script!"
echo "================================"

# Variables
name="Bash User"
current_date=$(date)
script_name=$(basename "$0")

echo "Hello, $name!"
echo "Current date: $current_date"
echo "Script name: $script_name"

# Simple loop
echo ""
echo "Counting from 1 to 5:"
for i in {1..5}; do
    echo "  Number: $i"
done

# Function definition
greet_user() {
    local user_name="$1"
    echo "👋 Greetings, $user_name! Nice to meet you!"
}

# Function call
echo ""
greet_user "Developer"

# File operations
echo ""
echo "Current directory contents:"
ls -la

# Simple conditional
echo ""
if [ -f "README.md" ]; then
    echo "✅ README.md exists in the current directory"
else
    echo "❌ README.md not found"
fi

echo ""
echo "🎉 Demo script completed successfully!"
