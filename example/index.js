import VerificationCode from "../src/index";

// 初始化
let verification_code = new VerificationCode("canvas"); //参数为页面中canvas的id

// 创建验证码
verification_code.create();

// 刷新惭怍
document.getElementById("refreshBtn").onclick = () => {
  verification_code.refresh();
};

// 验证操作
document.getElementById("submitBtn").onclick = () => {
  let userInput = document.getElementById("userInput");
  let value = userInput.value;
  if (verification_code.check(value)) {
    alert("正确");
  } else {
    alert("错误");
    userInput.focus();
  }
};
