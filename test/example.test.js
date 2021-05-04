// IMPORT MODULES under test here:
import { isYes } from '../utils.js';

const test = QUnit.test;

test('test if things starting with y return as true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = isYes('yes');
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('test if thing not starting with y returns as false', (expect)=> {
    const expected = false;
    const actual = isYes('nope');
    expect.equal(actual, expected);
});