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
    expect(plantAges.mercuryAge).toEqual(165.97);
  });

  test('should convert age1 into same age on venus', () => {
    let currentAgeTest = new UserInput(40, 50, 30);
    let plantAges = (currentAgeTest.getCurrentAge());
    expect(plantAges.venusAge).toEqual(64.98);
  });

  test('should convert age1 into same age on mars', () => {
    let currentAgeTest = new UserInput(40, 50, 30);
    let plantAges = (currentAgeTest.getCurrentAge());
    expect(plantAges.marsAge).toEqual(21.28);
  });

  test('should convert age1 into same age on jupiter', () => {
    let currentAgeTest = new UserInput(40, 50, 30);
    let plantAges = (currentAgeTest.getCurrentAge());
    expect(plantAges.jupiterAge).toEqual(3.37);
  });

  test('should convert age1 into same age on saturn', () => {
    let currentAgeTest = new UserInput(40, 50, 30);
    let plantAges = (currentAgeTest.getCurrentAge());
    expect(plantAges.saturnAge).toEqual(1.36);
  });

  test('should convert age1 into same age on uranus', () => {
    let currentAgeTest = new UserInput(40, 50, 30);
    let plantAges = (currentAgeTest.getCurrentAge());
    expect(plantAges.uranusAge).toEqual(0.48);
  });

  test('should convert age1 into same age on neptune', () => {
    let currentAgeTest = new UserInput(40, 50, 30);
    let plantAges = (currentAgeTest.getCurrentAge());
    expect(plantAges.neptuneAge).toEqual(0.24);
  });

  test('should convert age1 into same age on pluto', () => {
    let currentAgeTest = new UserInput(40, 50, 30);
    let plantAges = (currentAgeTest.getCurrentAge());
    expect(plantAges.plutoAge).toEqual(0.16);
  });
});

describe('getYearsUntil', () => {

  test('should calculate the years until a selected year on mercury', () => {
    const yearsUntilTest = new UserInput(40, 50, 30);
    let yearsUntil = (yearsUntilTest.getYearsUntil());
    expect(yearsUntil.mercuryAge).toEqual(41.49);
  });

  test('should calculate the years until a selected year on venus', () => {
    const yearsUntilTest = new UserInput(40, 50, 30);
    let yearsUntil = (yearsUntilTest.getYearsUntil());
    expect(yearsUntil.venusAge).toEqual(16.24);
  });

  test('should calculate the years until a selected year on mars', () => {
    const yearsUntilTest = new UserInput(40, 50, 30);
    let yearsUntil = (yearsUntilTest.getYearsUntil());
    expect(yearsUntil.marsAge).toEqual(5.32);
  });

  test('should calculate the years until a selected year on jupiter', () => {
    const yearsUntilTest = new UserInput(40, 50, 30);
    let yearsUntil = (yearsUntilTest.getYearsUntil());
    expect(yearsUntil.jupiterAge).toEqual(0.84);
  });

  test('should calculate the years until a selected year on saturn', () => {
    const yearsUntilTest = new UserInput(40, 50, 30);
    let yearsUntil = (yearsUntilTest.getYearsUntil());
    expect(yearsUntil.saturnAge).toEqual(0.34);
  });

  test('should calculate the years until a selected year on uranus', () => {
    const yearsUntilTest = new UserInput(40, 50, 30);
    let yearsUntil = (yearsUntilTest.getYearsUntil());
    expect(yearsUntil.uranusAge).toEqual(0.12);
  });

  test('should calculate the years until a selected year on neptune', () => {
    const yearsUntilTest = new UserInput(40, 50, 30);
    let yearsUntil = (yearsUntilTest.getYearsUntil());
    expect(yearsUntil.neptuneAge).toEqual(0.06);
  });

  test('should calculate the years until a selected year on pluto', () => {
    const yearsUntilTest = new UserInput(40, 50, 30);
    let yearsUntil = (yearsUntilTest.getYearsUntil());
    expect(yearsUntil.plutoAge).toEqual(0.04);
  });
});

describe('getYearSince', () => {

  test('should calculate the years since a selected year on mercury', () => {
    const yearSinceTest = new UserInput(40, 50, 30);
    let yearSince = (yearSinceTest.getYearSince());
    expect(yearSince.mercuryAge).toEqual(41.49);
  });

  test('should calculate the years since a selected year on venus', () => {
    const yearSinceTest = new UserInput(40, 50, 30);
    let yearSince = (yearSinceTest.getYearSince());
    expect(yearSince.venusAge).toEqual(16.24);
  });

  test('should calculate the years since a selected year on mars', () => {
    const yearSinceTest = new UserInput(40, 50, 30);
    let yearSince = (yearSinceTest.getYearSince());
    expect(yearSince.marsAge).toEqual(5.32);
  });

  test('should calculate the years since a selected year on jupiter', () => {
    const yearSinceTest = new UserInput(40, 50, 30);
    let yearSince = (yearSinceTest.getYearSince());
    expect(yearSince.jupiterAge).toEqual(0.84);
  });

  test('should calculate the years since a selected year on saturn', () => {
    const yearSinceTest = new UserInput(40, 50, 30);
    let yearSince = (yearSinceTest.getYearSince());
    expect(yearSince.saturnAge).toEqual(0.34);
  });

  test('should calculate the years since a selected year on uranus', () => {
    const yearSinceTest = new UserInput(40, 50, 30);
    let yearSince = (yearSinceTest.getYearSince());
    expect(yearSince.uranusAge).toEqual(0.12);
  });

  test('should calculate the years since a selected year on neptune', () => {
    const yearSinceTest = new UserInput(40, 50, 30);
    let yearSince = (yearSinceTest.getYearSince());
    expect(yearSince.neptuneAge).toEqual(0.06);
  });
});