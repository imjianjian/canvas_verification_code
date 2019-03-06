# usage

> npm install

```
//引入
import VerificationCode from "../src/index";

//创建对象
let verification_code = new VerificationCode("canvas");//参数为页面中canvas的id

// 创建验证码
verification_code.create();

 //验证
verification_code.check(value);//true,false

//直接获取验证码的值
verification_code.value;
```

# run

>npm run dev

# build

>npm run build