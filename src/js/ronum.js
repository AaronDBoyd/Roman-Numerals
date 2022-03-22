//Business Logic
export default class Roman {

  constructor(number) {
    this.number = number;
  }

  // roman() {
  //   let numeral ;
  //   if (this.number === 1) {
  //     numeral = "I"
  //   }
  //   return numeral;
  // }







}


// I = 1
// V = 5
// X = 10
// L = 50 
// C = 100
// D = 500
// M = 1000
// III = 3
// IV = 4
// VIII = 8
// IX = 9
// XC = 90
// XXXIX = 39
// CDXXXIX = 439
// CCXLVI = 246

// -Add the value of all the symbols.
// -There may not be more than three of the same characters in a row.
// -After 3, the lesser symbol goes in front of the next higher symbol to "subtract" an increment from the higher value.
// -3999 is the highest number you can count to in roman numerals.