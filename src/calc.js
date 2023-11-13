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
    planetAges.jupiterAge = Math.round(earthDays / 4329);
    planetAges.mercuryAge = parseFloat((earthDays / 87.97).toFixed(2));
    planetAges.venusAge = parseFloat((earthDays / 224.7).toFixed(2));
    planetAges.marsAge = Math.round(earthDays / 686);
    return planetAges;
  }

  getYearsUntil() {
    const earthDays = this.age1 * 365;
    const futureEarthDays = this.age2 * 365;
    let yearsUntil = {};
    yearsUntil.jupiterAge = Math.round((futureEarthDays / 4329) - (earthDays / 4329));
    yearsUntil.mercuryAge = Math.round((futureEarthDays / 88) - (earthDays / 88));
    yearsUntil.venusAge = Math.round((futureEarthDays / 225) - (earthDays / 225));
    yearsUntil.marsAge = Math.round((futureEarthDays / 686) - (earthDays / 686));
    return yearsUntil;
  }

  getYearSince() {
    const earthDays = this.age1 * 365;
    const pastEarthDays = this.age3 * 365;
    let yearSince = {};
    yearSince.jupiterAge = Math.round((earthDays / 4329) - (pastEarthDays / 4329));
    yearSince.mercuryAge = Math.round((earthDays / 88) - (pastEarthDays / 88));
    yearSince.venusAge = Math.round((earthDays / 225) - (pastEarthDays / 225));
    yearSince.marsAge = Math.round((earthDays / 686) - (pastEarthDays / 686));
    return yearSince;
  }
}