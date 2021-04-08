export default class Slide {
  constructor() {
    this.slide = document.querySelector('.slide');
  }

  init() {
    console.log(this.slide);
    return this;
  }
}
