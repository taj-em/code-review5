/* eslint-disable no-undef */
import { UserInput } from './../src/calc';

describe('UserInput'), () => {

  test('should create an object containing the users initial age and future age', () => {
    const inputTest = new UserInput(40, 50);
    expect(inputTest.age1).toEqual(40);
    expect(inputTest.age2).toEqual(50); 
  });
}