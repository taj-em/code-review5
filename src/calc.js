/* eslint-disable no-unused-vars */
export class UserInput {
  constructor(age1, age2) {
    this.age1 = age1;
    this.age2 = age2;
  }
  getCurrentAge() {
    const earthDays = this.age1 * 365;
    let mercuryAge = 0;
    mercuryAge = Math.round(earthDays / 88);
    return mercuryAge;
  }
}