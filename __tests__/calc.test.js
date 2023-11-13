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
    let plantAges = (currentAgeTest.getCurrentAge());
    expect(plantAges.mercuryAge).toEqual(166);
  });

  test('should convert age1 into same age on venus', () => {
    let currentAgeTest = new UserInput(40, 50);
    let plantAges = (currentAgeTest.getCurrentAge());
    expect(plantAges.venusAge).toEqual(65);
  });

  test('should convert age1 into same age on mars', () => {
    let currentAgeTest = new UserInput(40, 50);
    let plantAges = (currentAgeTest.getCurrentAge());
    expect(plantAges.marsAge).toEqual(21);
  });
});