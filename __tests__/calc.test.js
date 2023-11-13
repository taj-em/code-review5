/* eslint-disable no-undef */
import { UserInput } from './../src/calc';

describe('UserInput', () => {

  test('should create an object containing the users initial age and future age', () => {
    let inputTest = new UserInput(40, 50, 30);
    expect(inputTest.age1).toEqual(40);
    expect(inputTest.age2).toEqual(50); 
  });
});

describe('getCurrentAge', () => {

  test('should convert age1 into same age on mercury', () => {
    let currentAgeTest = new UserInput(40, 50, 30);
    let plantAges = (currentAgeTest.getCurrentAge());
    expect(plantAges.mercuryAge).toEqual(166);
  });

  test('should convert age1 into same age on venus', () => {
    let currentAgeTest = new UserInput(40, 50, 30);
    let plantAges = (currentAgeTest.getCurrentAge());
    expect(plantAges.venusAge).toEqual(65);
  });

  test('should convert age1 into same age on mars', () => {
    let currentAgeTest = new UserInput(40, 50, 30);
    let plantAges = (currentAgeTest.getCurrentAge());
    expect(plantAges.marsAge).toEqual(21);
  });

  test('should convert age1 into same age on jupiter', () => {
    let currentAgeTest = new UserInput(40, 50, 30);
    let plantAges = (currentAgeTest.getCurrentAge());
    expect(plantAges.jupiterAge).toEqual(3);
  });
});

describe('getYearsUntil', () => {

  test('should calculate the years until a selected year on mercury', () => {
    const yearsUntilTest = new UserInput(40, 50, 30);
    let yearsUntil = (yearsUntilTest.getYearsUntil());
    expect(yearsUntil.mercuryAge).toEqual(41);
  });

  test('should calculate the years until a selected year on venus', () => {
    const yearsUntilTest = new UserInput(40, 50, 30);
    let yearsUntil = (yearsUntilTest.getYearsUntil());
    expect(yearsUntil.venusAge).toEqual(16);
  });

  test('should calculate the years until a selected year on mars', () => {
    const yearsUntilTest = new UserInput(40, 50, 30);
    let yearsUntil = (yearsUntilTest.getYearsUntil());
    expect(yearsUntil.marsAge).toEqual(5);
  });

  test('should calculate the years until a selected year on jupiter', () => {
    const yearsUntilTest = new UserInput(40, 50, 30);
    let yearsUntil = (yearsUntilTest.getYearsUntil());
    expect(yearsUntil.jupiterAge).toEqual(1);
  });
});