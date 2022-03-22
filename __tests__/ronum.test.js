import Roman from '../src/js/ronum.js';

describe('Roman', () => {

  test('should recognize the number in the object', () => {
    const numeral = new Roman(1);
    expect(numeral.number).toEqual(1);
  });
});



// It should turn  1 into I.
// It should turn 3 into III 
// It should turn 5 into V 
// It should turn 4 into IV 
// It should turn 8 into VIII  
// It should turn 10 into X 
// It should turn 9 into IX 
