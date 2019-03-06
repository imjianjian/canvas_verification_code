import {
  randomWord,
  randomColor,
  randomFont,
  randomSize
} from "./DataGenerator";

export default class VerificationCode {
  constructor(id) {
    let canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.value;
  }

  drawCode() {
    this.value="";
    for (let i = 0; i < 4; i++) {
      this.ctx.font = `${randomSize()}px ${randomFont()}`;
      this.ctx.fillStyle = randomColor();
      let word = randomWord();
      this.ctx.fillText(word, 50 * i + 10, 40);
      this.value += word;
    }
  }

  drawLine(num) {
    let x1, x2, y1, y2;
    for (let i = 0; i < num; i++) {
      x1 = Math.random() * 200;
      y1 = Math.random() * 50;
      x2 = Math.random() * 200;
      y2 = Math.random() * 50;
      this.ctx.fillStyle = randomColor();
      this.ctx.beginPath();
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.stroke();
    }
  }

  drawPoint(num) {
    let x1, y1, r;
    for (let i = 0; i < num; i++) {
      x1 = Math.random() * 200;
      y1 = Math.random() * 50;
      r = Math.random() * 2;
      this.ctx.fillStyle = randomColor();
      this.ctx.beginPath();
      this.ctx.arc(x1, y1, r, 0, Math.PI * 2, true);
      this.ctx.fill();
    }
  }

  refresh() {
    this.ctx.clearRect(0, 0, 200, 50);
    this.drawCode();
    this.drawLine(5);
    this.drawPoint(50);
  }

  create(){
    this.refresh();
  }

  check(str){
    return str.toLocaleLowerCase() ===this.value.toLocaleLowerCase();
  }
}
