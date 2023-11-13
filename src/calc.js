/* eslint-disable no-unused-vars */
export class UserInput {
  constructor(age1, age2, age3) {
    this.age1 = age1;
    this.age2 = age2;
    this.age3 = age3;
  }
  getCurrentAge() {
    const earthDays = this.age1 * 365;
    let planetAges = {};
    planetAges.saturnAge = parseFloat((earthDays / 10752.9).toFixed(2));
    planetAges.jupiterAge = parseFloat((earthDays / 4328.9).toFixed(2));
    planetAges.mercuryAge = parseFloat((earthDays / 87.97).toFixed(2));
    planetAges.venusAge = parseFloat((earthDays / 224.7).toFixed(2));
    planetAges.marsAge = parseFloat((earthDays / 686.2).toFixed(2));
    return planetAges;
  }

  getYearsUntil() {
    const earthDays = this.age1 * 365;
    const futureEarthDays = this.age2 * 365;
    let yearsUntil = {};
    yearsUntil.jupiterAge = parseFloat(((futureEarthDays / 4328.9) - (earthDays / 4328.9)).toFixed(2));
    yearsUntil.mercuryAge = parseFloat(((futureEarthDays / 87.97) - (earthDays / 87.97)).toFixed(2));
    yearsUntil.venusAge = parseFloat(((futureEarthDays / 224.7) - (earthDays / 224.7)).toFixed(2));
    yearsUntil.marsAge = parseFloat(((futureEarthDays / 686.2) - (earthDays / 686.2)).toFixed(2));
    return yearsUntil;
  }

  getYearSince() {
    const earthDays = this.age1 * 365;
    const pastEarthDays = this.age3 * 365;
    let yearSince = {};
    yearSince.jupiterAge = parseFloat(((earthDays / 4328.9) - (pastEarthDays / 4328.9)).toFixed(2));
    yearSince.mercuryAge = parseFloat(((earthDays / 87.97) - (pastEarthDays / 87.97)).toFixed(2));
    yearSince.venusAge = parseFloat(((earthDays / 224.7) - (pastEarthDays / 224.7)).toFixed(2));
    yearSince.marsAge = parseFloat(((earthDays / 686.2) - (pastEarthDays / 686.2)).toFixed(2));
    return yearSince;
  }
}