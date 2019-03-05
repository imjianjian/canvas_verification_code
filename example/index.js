import VerificationCode from "../src/index";

let verification_code = new VerificationCode("canvas");


// 刷新惭怍
document.getElementById("refreshBtn").onclick = e => {
  let code = verification_code.refresh();
  localStorage.setItem("verification_code", code);
};

// 验证操作
document.getElementById("submitBtn").onclick = e => {
  let userInput = document.getElementById("userInput");
  let value = userInput.value;
  if (
    value.toLocaleLowerCase() !=
    localStorage.getItem("verification_code").toLocaleLowerCase()
  ) {
    alert("错误");
    userInput.focus();
  } else {
    alert("正确");
  }
};

let code = verification_code.create();
// 未做加密处理
localStorage.setItem("verification_code", code);
