// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {

    //check for uneven number when decoding
    const newInput = input.replace(/\s/g, ''); //convert input to numbers only so spaces do not count towards total
    if (encode === false && newInput.length % 2 !== 0) {
      return false
    }
    const polybiusSquare = [
      ['A', 'B', 'C', 'D', 'E'],
      ['F', 'G', 'H', 'I', 'K'], // Note: 'J' is combined with 'I'
      ['L', 'M', 'N', 'O', 'P'],
      ['Q', 'R', 'S', 'T', 'U'],
      ['V', 'W', 'X', 'Y', 'Z']
  ];


  if (encode) {
      // Encoding: Convert letters to number pairs
      const message = input.toUpperCase().replace(/J/g, 'I'); // Replace 'J' with 'I'
      let encoded = '';

      for (let char of message) {
        //check if character is a space
          if (char === ' ') {
              encoded += ' '; //ignore spaces
          } else {
              for (let row = 0; row < polybiusSquare.length; row++) {
                  const col = polybiusSquare[row].indexOf(char);
                  if (col !== -1) {
                      encoded += `${col + 1}${row + 1}`;
                      break;
                  }
              }
          }
      }

      return encoded;
  } else {
      // Decoding: Convert number pairs to letters
      const pairs = input.match(/(?:[^\s]{2})|\s/g); 
      //convert input to pairs to 2 numbers, for all instances in input
    //make placeholder variable for decoded message
      let decoded = '';

      //loop through pairs to decode
      for (let pair of pairs) {
        //check if current pair is a space
        if (pair === ' ') {
          decoded += ' '; //ignore spaces
        } else {
          //find row and column in polybiusSquare at current pair
          const row = parseInt(pair[0]) - 1; //subtract one to make up for zero based index
          const column = parseInt(pair[1]) - 1;

          //handle special case 42 as i or j
          if (row === 3 && column === 1) {
            decoded += '(I/J)';
          } else {
            //add letter at index of current pair to result variable
            decoded += polybiusSquare[column][row];
          }
        }
      }
      //return decoded as all lowercase
      return decoded.toLowerCase();
  }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
