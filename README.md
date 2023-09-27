# decoder-ring-project

## Programming Fundamentals Capstone for Thinkful

Purpose of this project is to display our acquired knowledge of vanilla JavaScript algorithms and functions, through developing an app that encodes and decodes different messages for the user.  
Main learning objectives for this project were to write a series of unit tests for the functions used to encode/decode messages, using different expect methods, and to implement our solutions to the three major functions.

### The three major functions:
1. Ceasar Shift function
2. Polybius Square function
3. Substitution function

### Caesar Shift
Parameters: a string input message, an integer representing shift amount, and encode value, set to `true` by default. (setting encode to `false` allows for function to decode messages!)  
This function encodes messages by shifting each letter a desired amount of times times to the right (or left if input is a negative integer) in alphabetical sequence, and decodes by doing the opposite.  
Specific requirements:
* if the shift value input into function is `0`, `greater than 25`, or `less than -25`, the function will return `false`, only handling shift amounts that fall within parameters of the alphabet's length.
* ignores presence of capital letters, still allowing for encoding/decoding
* handles a wrap around the alphabet if necessary, for example, shifting `'z'` to `'c'` if shift amount is `3`.
* handles spaces and non-alphabetic symbols correctly, leaving them as is in encoded/decoded message.

### Polybius Square
Parameters: a string input message, and an encode value. (all encode parameters work the same way in these functions!)  
This function uses the concept of a Polybius Square, assigning letters a 2 digit integer based on a grid system for the alphabet. The square is structured as an array for the sake of being iterable, and inputs are encoded/decoded using row and index values from data array.
Specific requirements:
* i and j are both mapped to the same square, function encodes both to `42`, and decodes `42` to `'I/J'`.
* ignores presence of capital letters, still allowing fo encoding/decoding.
* handles spaces and non-alphabetic symbols correctly, leaving them as is in encoded/decoded message.

 ### Subsitution Alphabet
Parameters: a string input message, a string substitution alphabet for the function to reference, and an encode value  
This function takes an input substitution albhabet to use when both encoding and decoding messages. Both the regular alphabet and substition alphabet are stored as string variables. The function loops through the regular alphabet to find each character's indexes, then finds the corresponding characters in the substitution alphabet to encode, and vice versa to decode.  
Specific requirements:
* returns `false` if input substitution alphabet is not exactly 26 long
* returns `false` if any characters in input substitution alphabet are repeated
* ignores presence of capital letters, still allowing for encoding/decoding
* handles spaces and non-alphabetic symbols correctly, leaving them as is in encoded/decoded message.
* correctly encodes messages using the given substitution alphabet, allowing for as many variations as possible instead of using the same substitution alphabet every time
