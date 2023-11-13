/* eslint-disable no-undef */
import { UserInput } from './../src/calc';

describe('UserInput', () => {

  test('should create an object containing the users initial age and future age', () => {
    let inputTest = new UserInput(40, 50);
    expect(inputTest.age1).toEqual(40);
    expect(inputTest.age2).toEqual(50); 
  });
});

describe('getCurrentAge', () => {

  test('should convert age1 into same age on mercury', () => {
    let currentAgeTest = new UserInput(40, 50);
    let mercuryAge = currentAgeTest.getCurrentAge();
    expect(mercuryAge).toEqual(166.08);
  });
});