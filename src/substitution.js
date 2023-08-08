// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  //make helper function to check if input alphabet has repeating characters
  function hasRepeatingCharacter(string) {
    const charSet = new Set();

    //loop through input string
    for (const character of string) {
      if (charSet.has(character)) {
        return true;
      }
      charSet.add(character);
    }
    return false;
  }

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26 || hasRepeatingCharacter(alphabet)) {
      return false;
    }

    //create regular alphabet for function to reference
    const alphabetRegular = 'abcdefghijklmnopqrstuvwxyz';
    //do same thing for given alphabet
    const subAlphabet = alphabet;

    if (encode) {
      //create placeholder variable for encoded message
      let encoded = '';
      //loop through input
      for (let i = 0; i < input.length; i++) {
        //create placeholder for current char
        const character = input[i];
        //check if character is a space
        if (character === ' ') {
          encoded += ' '; //leave spaces alone
        } else {
          const index = alphabetRegular.indexOf(character.toLowerCase()); //store index of character in regular alphabet
          if (index !== -1) {
            //apply 'index' to subAlphabet to pull character in substitution that matches index in regular alphabet
            const encodedChar = subAlphabet[index];
            //add encodedChar to result variable
            encoded += character === character.toUpperCase() ? encodedChar.toUpperCase() : encodedChar;
          }
        }
      }

      //return encoded message
      return encoded.toLowerCase();
    } else {
      //decode messages using given alphabet
      //create placeholder for decoded message
      let decoded = '';
      for (let i = 0; i < input.length; i++) {
        const character = input[i];
        //check if character is a space
        if (character === ' ') {
          decoded += ' '; //ignore spaces
        } else {
          const index = subAlphabet.indexOf(character.toLowerCase()); //store index to decode
          if (index !== -1) {
            const decodedChar = alphabetRegular[index]; //apply index of current character to regular alphabet
            decoded += character === character.toUpperCase() ? decodedChar.toUpperCase() : decodedChar;
          }
        }
      }

      //return decoded message
      return decoded.toLowerCase();
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
