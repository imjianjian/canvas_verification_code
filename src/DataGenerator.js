const CODE_DIR =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const FONT_DIR = "hei Alef Amiri Arial hei song kai youyuan zhuan yahei";

export function randomWord() {
  return CODE_DIR.split("").splice((Math.random() * 100) % 62, 1);
}

export function randomColor() {
  return `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() *
    255})`;
}

export function randomFont() {
  return `${
    FONT_DIR.split(" ")[(Math.random() * 100) % FONT_DIR.split(" ").length]
  }`;
}

export function randomSize() {
  let size = Math.random() * 45;
  if (size < 25) size = randomSize();
  return size;
}

export function randomAngle() {
  if (Math.random() < 0.5) {
    return Math.PI * Math.random() * 0.3;
  } else {
    return Math.PI * (2 - Math.random() * 0.3);
  }
}
