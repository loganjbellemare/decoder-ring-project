// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // check if shift parameter is 0, above 25, or less than -25, return false if so
    if (shift === 0 || shift < -25 || shift > 25) return false;

    //make alphabet variable for function to pull letters from 
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    //convert input string to lowercase and add to an array
    const inputArray = [...input.toLowerCase()];

  
      return inputArray.map((character) => { //map shifted characters to new array
        //check if character is an alphabetical character
        if (character >= 'a' && character <= 'z') {
          //locate character in alphabet array
          const index = alphabet.indexOf(character);
          //create placeholder variable for shifted character
          let newIndex;

          /*
          set up shift, should take into account whether encoding or decoding and add or subtract
          input shift amount from 'index'
          */
         if (encode) {
          newIndex = (index + shift + 26) % 26; //allow for wrapping when encoding
         } else {
          newIndex = (index - shift + 26) % 26; //allow for wrapping when decoding
         }

         //return newIndex value
         return alphabet[newIndex];
        
         //return character if it is a special character
        } else {
          return character;
        }
      })
      .join(''); //convert array back to string for final result message
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
